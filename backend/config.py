import os

#basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    
    DB_NAME =  "Digi_ezze"
    DB_PASSWORD = "zikra%40123"
    DB_USER =  "postgres"
    DB_HOST =  "localhost"
    DB_PORT =  "5432"


    SQLALCHEMY_DATABASE_URI = f"postgresql+psycopg2://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False


'''class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:zikra%401234@localhost:5432/Digismile'
    SQLALCHEMY_TRACK_MODIFICATION = False'''
    
