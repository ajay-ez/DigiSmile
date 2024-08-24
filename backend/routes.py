from flask import Blueprint, request, jsonify
from backend import db, bcrypt
from backend.models import Users, DoctorAvailability, Appointment
from datetime import datetime
 

main = Blueprint('main', __name__)

@main.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400

    def check(old, new):
        if new == old:
            return True
        else:
            return False

    user = Users.query.filter_by(email=email).first()

    # if not user or check(user.password_hash, password):
    if not user or bcrypt.check_password_hash(user.password_hash, password):
        return jsonify({'message': 'login successful'}), 200
    return jsonify({'message': 'Invalid Credentials'}), 401

@main.route('/register', methods=['POST'])
def register():
    data = request.json

    # Extract user details from the request
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    date_of_birth = data.get('date_of_birth')
    address = data.get('address')
    phone_number = data.get('phone_number')

    # Validate the input
    if not all([name, email, password]):
        return jsonify({'message': 'Name, email and password are required'}), 400

    # Check if the email already exists
    if Users.query.filter_by(email=email).first():
        return jsonify({'message': 'Email is already registered'}), 400
    
    # Hash the password
    password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create new user Instance
    new_user = Users(
        name = name,
        email = email,
        password_hash = password_hash,
        date_of_birth = date_of_birth,
        address = address,
        phone_number = phone_number,
        role='patient'
    )

    # Add the new user to the database
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully!'}), 201



@main.route('/appointments', methods=['GET'])
def get_appointments():
    appointments = Appointment.query.all()
    return jsonify([{
        'id': appt.id,
        'user_id': appt.user_id,
        'doctor_id': appt.doctor_id,
        'appointment_date': appt.appointment_date.strftime('%Y-%m-%d'),
        'appointment_time': appt.appointment_time.strftime('%H:%M'),
        'status': appt.status
    } for appt in appointments])


@main.route('/appointments', methods=['POST'])
def create_appointment():
    data = request.json
    user_id = data['user_id']
    doctor_id = data['doctor_id']
    appointment_date = datetime.strptime(data['appointment_date'], '%Y-%m-%d').date()
    appointment_time = datetime.strptime(data['appointment_time'], '%H:%M').time()

    # Check if doctor is available
    availability = DoctorAvailability.query.filter_by(
        doctor_id=doctor_id,
        available_date=appointment_date,
        available_time=appointment_time
    ).first()

    if availability:
        # Create the new appointment
        new_appointment = Appointment(
            user_id=user_id,
            doctor_id=doctor_id,
            appointment_date=appointment_date,
            appointment_time=appointment_time
        )
        db.session.add(new_appointment)
        db.session.commit()
        return jsonify({'message': 'Appointment created successfully!'}), 201
    else:
        return jsonify({'message': 'Doctor is not available at the selected time.'}), 400
