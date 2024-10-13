with open('db.json', 'rb') as f:
    content = f.read()

with open('db_utf8.json', 'wb') as f:
    f.write(content.decode('latin-1').encode('utf-8'))
