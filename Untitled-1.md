fillers 
prp 
aptos
botox
SSL sarees
Butcklift
Arthrosamid 
K Pet
the midlife-reset 
Amrutha-Raagalya
6. KPetz – https://kpetz.com/

kensleyaesthetics  https://kensleyaesthetics.com
threadlift https://threadlift.uk
RMA https://rugbymedicalaesthetics.co.uk
meditorn https://meditroncdc.com
1. Fillers Skin – https://fillers.skin/
2. PRP Treatment – https://prp.skin/
3. Aptos UK – https://aptosuk.com/
4. Botox – http://botoxuk.com/
5. Buttock Lift – https://buttocklift.uk/



All endpoints run on your local dev server. Start it with npm run dev, then use these:                                                                                                 
                                         
  OTP                                                                                                                                                                                    
                                                            
  Request OTP                                                                                                                                                                            
  POST http://localhost:3000/api/otp/request                                                                                                                                             Content-Type: application/json

  {
    "phone": "+919885933339"
  }

  Verify OTP
  POST http://localhost:3000/api/otp/verify
  Content-Type: application/json

  {
    "phone": "+919885933339",
    "code": "123456"
  }

  Contact Form

  Submit
  POST http://localhost:3000/api/contact
  Content-Type: application/json

  {
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+919885933339",
    "needs": ["Website", "SEO"],
    "message": "Just testing"
  }

  List submissions (admin)
  GET http://localhost:3000/api/contact?page=1&limit=20
  x-api-key: your-secret-key

  Blog

  List posts (public)
  GET http://localhost:3000/api/blog

  Single post
  GET http://localhost:3000/api/blog/why-your-business-needs-a-brand-not-just-a-logo

  Create post (admin)
  POST http://localhost:3000/api/blog
  Content-Type: application/json
  x-api-key: your-secret-key

  {
    "slug": "test-post",
    "title": "Test Post",
    "excerpt": "A test blog post",
    "category": "Testing",
    "body": "This is the post content.",
    "published": true
  }

  Update post (admin)
  PUT http://localhost:3000/api/blog/test-post
  Content-Type: application/json
  x-api-key: your-secret-key

  {
    "title": "Updated Title"
  }

  Delete post (admin)
  DELETE http://localhost:3000/api/blog/test-post
  x-api-key: your-secret-key

  ---
  Before testing: make sure you've set DATABASE_URL and ADMIN_API_KEY in .env.local and run npx prisma migrate dev --name init. Without the database, all endpoints will return 500
  errors.