# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I have never had to add a foreign key. THe primary key is added and the foreign key is on the Cohort Model. 

Researched answer: In Rails the column is used to hold the foreign key om a model is the name with an "_id" added to the end. The foreign key is a column in a relational db that makes a link between two tables by referencing the primary key of the other table. Create a relationship between Cohort and students by updating the class, Class Student belongs_to :cohort.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must always be passed params are the , view, update and destroy. If you don't have params on edit for example there is now way to prevent another user from getting the correct info updated. Same with destroy. You want to ensure you have strong params to make sure you are making correct data changes.

Researched answer: Rest is representational state transfer. Http is stateless. Developers need to input code to let apps know how to react. ret brings a level of standard routing path. The RESTFUl routes that must always be passed params are Show, Create, Update, edit, and destroy.



3. Name three rails generator commands. What is created by each?

Your answer: Rails generate model. Makes a model that can then be used to create objects. Rails g server starts the rails server. Rails g controller makes a controller for the models. Rails g resource does all the work of creating a model, route, and controller.

Researched answer:Rails g controller, model, scaffold, resource. The rail g scaffold which is  a full model set, db migration for model, controller, views to show and change data and a test suite for each.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students> Index method finds the index of the object we are referencing.

action: "POST" location: /students  Create method makes a new instance of the model as an object. 

action: "GET" location: /students/new This uses the new method to makes a new student

action: "GET" location: /students/2     The index method to get the student at id #2 

action: "GET" location: /students/2/edit The edit input data to change the object at id 2

action: "PATCH" location: /students/2 The update method will update the object at id 2. The action performed by the controller is to update an existing object with new/different data. 

action: "DELETE" location: /students/2 Calls on the destroy method in the controller. This then uses id 2 to delete the object at id 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

Making an App to manage a to do list. 

1. As a user I can add items to my to do list with a task name, date. (create)

2. As a user I can see the items on my to do list.                      (read)

3. As a user I can edit items on my to do list                          (update)

4. As a user I can see my list and  the dates the tasks need to be completed by. (show)

5. As a user I can check off tasks that are complete.           (edit)

6. As a user I can delete items off my list.                       (destroy)

7. As a user I can have multiple to do lists. 

8. As a user I can have a unique log in id and password.               (strong params)

9. As a user I can have tasks repeat at a certain increment. ie weekly or monthly. 

10. As a user I can change the background color of my to do list.       


