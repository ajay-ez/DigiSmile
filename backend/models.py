from backend import db
import uuid

class Users(db.Model):
    __tablename__ = 'users'

    user_id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    email = db.Column(db.String(255), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(10), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    date_of_birth = db.Column(db.Date, nullable=True)
    address = db.Column(db.Text, nullable=True)
    phone_number = db.Column(db.String(20), nullable=True)
    problem = db.Column(db.Text, nullable=True)


class Appointment(db.Model):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    doctor_id = db.Column(db.Integer, nullable=False)
    appointment_date = db.Column(db.Date, nullable=False)
    appointment_time = db.Column(db.Time, nullable=False)
    status = db.Column(db.String(50), nullable=False, default='Scheduled')

class DoctorAvailability(db.Model):
    __tablename__ = 'doctor_availability'

    doctor_id = db.Column(db.Integer, primary_key=True)
    available_date = db.Column(db.Date, primary_key=True)
    available_time = db.Column(db.Time, primary_key=True)
