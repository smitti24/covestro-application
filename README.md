# CovestroV2App

Welcome to Covestro V2.
- The application is designed for Assellion. It is a basic application that uses a mock back end to log a user in. Once a user is logged in, they would be able to navigate to the products page where they can view all available products.
- The application uses a basic implementation of ngrx for storing the user profile and once the user logs in, the products.
- The application uses cypress for e2e testing and includes a very basic screen snapshot test implementation.

# How to run application:
1. Run npm i
2. To Run application without backend server: ng serve.
3. To Run server: npm start.
4. To run both application and server use: npm run dev (Prefered method of starting the application).
5. To log into the application please use:

- email: covestro-admin@covestro.com
- password: admin

# How to run tests:
1. Run: npm run cypress:open.

# What would I have done better (If i had more time):
1. Included unit tests.
2. I would have liked to implement a auth token that is assigned to the user upon login. This token could then be used to perform additional requests.
3. Include more extensive e2e tests.
4. Implemented a burger menu for mobile view (Currenlty the menu items are always displayed on the header component).
5. Allowed users to search for products by name, price etc. (I just did not have time to implement this without risking bugs or breakages in the code).
6. I implemented a implementation of ngrx but I would have liked to use NGRX entity data for the products loading. (I just wanted to get the application up and running, if i had more time I would start by refactoring products entity to make use of ngrx data).
7. I would have liked to allow the user to add, edit and delete products.
8. Implement a loader that shows up when a service is processing a backend api request.

# What I did wrong:
1. I think i spent to much time on styling, but I really like creating applications that are both functional and visually appealing.
2. I could not get a mock products test working. The wait kept failing when i tried to retrieve data from the product fixture.
3. I did not create a link between user and products. (I would if i had more time, create a many to many relationship between user and products, this will enable me to only show products that are linked to the logged in user).
4. I often had to stop myself from implemeting things that were not in spec. For example, i wanted to have images assigned to the products and then when the user click on a product name, the full product information will be shown allong with the image. I did not add images to the products because it was not part of the spec model.
5. I did not make use of lastUpdated on the product model. I think this is ok for now, because I am not allowing the user to make edits to the product. (would be done in a phase 2 of the application)

# What I did well:
1. Time management. I feel that I managed my time really well. Before I started coding anything, I first wrote down tasks for myself and arranged them in order of importance. I assigned a rough deadline to each and a hard deadline for the application completion.
  - This worked really well for me as I knew when i needed to start the next feature, and also I always knew that I was on schedule for completion.
  - I feel without me having done proper planning before hand, I would have struggled to keep track of how far I am and what still needs to be done.
2. Im happy with the outcome of the application, the funtionality and especially the look and feel of the application. 
