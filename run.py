from api import app, db

if __name__ == '__main__':
  db.create_all()
  from api import temp

  print('SERVING PWA FILES FROM:' + app.config['PWA_ASSETS'])
  app.run(host='0.0.0.0', port=5000, debug=True)