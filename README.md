# Create a .env file on the root on the project
- DATABASE_URL="XXXXXXXXX"
- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_SECRET=your_chosen_nextauth_secret
- GOOGLE_CLIENT_ID=XXXXXXX
- GOOGLE_CLIENT_SECRET=XXXXXX


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


# Read Value
- 1. Next.js automatically loads .env files at runtime Next.js reads environment files in this order:.env.local (highest priority, ignored by git)
.env.development or .env.production (based on NODE_ENV) ,.env
When you run docker run -d -p 3000:3000 nextapp, Next.js looks for these files inside the container and loads them automatically.


# To start the project using docker-compose
- docker-compose up