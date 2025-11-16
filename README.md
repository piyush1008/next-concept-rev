# To start the project using Docker
1. Docker installed on your machine
2. Make a postgres db from neon or aiven 

''' bash
docker build --build-arg DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy -t nextapp .  
'''


'''bash
─ docker run -d -p 3000:3000 nextapp  
'''
## docker run commands above will take all the env variable at the root file structure.



