import os
from dotenv import load_dotenv
import psycopg2

# Load .env file
load_dotenv()

# Get variables
host = os.getenv("DB_HOST")
database = os.getenv("DB_NAME")
user = os.getenv("DB_USER")
password = os.getenv("DB_PASSWORD")
port = os.getenv("DB_PORT")

conn = None
cursor = None

try:
    # Establish the connection
    conn = psycopg2.connect(
        host=host,
        database=database,
        user=user,
        password=password,
        port=port  # default port is 5432, change it if yours is different
    )

    cursor = conn.cursor()

    # Step 1: Create a table
    create_table_query = """CREATE TABLE test_table (
                                id SERIAL PRIMARY KEY,
                                name VARCHAR(255) NOT NULL
                            );"""

    cursor.execute(create_table_query)
    conn.commit()
    print("Table test_table created successfully.")

    # Step 2: Confirm table was created
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
    tables = cursor.fetchall()
    if any("test_table" in table for table in tables):
        print("Table test_table exists.")
    else:
        print("Table test_table does not exist.")

    # Step 3: Delete the table
    drop_table_query = """DROP TABLE test_table;"""
    cursor.execute(drop_table_query)
    conn.commit()
    print("Table test_table dropped successfully.")

    # Step 4: Confirm table was deleted
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
    tables = cursor.fetchall()
    if any("test_table" in table for table in tables):
        print("Table test_table still exists.")
    else:
        print("Table test_table successfully deleted.")

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    if cursor is not None:
        cursor.close()
    if conn is not None:
        conn.close()
        print("Database connection closed.")