export const DATA = [
  {
    id: 1,
    question: ' What do you understand by RESTful Web Services?',
    category: 'RestApi',
    answer:
      'RESTful web services are services that follow REST architecture. REST stands for Representational State Transfer and uses HTTP protocol (web protocol) for implementation. These services are lightweight, provide maintainability, scalability, support communication among multiple applications that are developed using different programming languages. They provide means of accessing resources present at server required for the client via the web browser by means of request headers, request body, response body, status codes, etc.',
  },
  {
    id: 2,
    question: ' Explain different phases of RAD model.',
    category: 'Springboot',
    answer:
      'RESTful web services are services that follow REST architecture. REST stands for Representational State Transfer and uses HTTP protocol (web protocol) for implementation. These services are lightweight, provide maintainability, scalability, support communication among multiple applications that are developed using different programming languages. They provide means of accessing resources present at server required for the client via the web browser by means of request headers, request body, response body, status codes, etc.',
  },
  {
    id: 4,
    question: ' What is DevTools in Spring Boot?',
    category: 'Springboot',
    answer:
      'Spring Boot DevTools helps you to increase the productivity of the developer. So, you don’t require to redeploy your application every time you make the changes. It allows the developer to reload changes without the need of restarting of the server.',
  },
  {
    id: 5,
    question: ' What is a Spring Boot Actuator?',
    category: 'Springboot',
    answer:
      'Spring Boot Actuator allows you to monitor and manage your application when you want to push it for the production. It helps you to control your application by using HTTP endpoints.',
  },
  {
    id: 6,
    question: ' How are properties defined? Where?',
    category: 'Springboot',
    answer:
      `You can define properties in the application.properties file exists in the classpath. Example: configure default DataSource bean  database.host=localhost`,
  },
  {
    id: 7,
    question:
      'What is the command to run Spring Boot application to custom port? ',
    category: 'Springboot',
    answer:
      'In application.properties, add following property.server.port = 8181',
  },
  {
    id: 8,
    question:
      ' How can you access a value defined in the application? What is properties file in Spring Boot? ',
    category: 'Springboot',
    answer:
      'Use the @Value annotation to access the properties which is defined in the application – properties file@Value("${custom.value}") private String customVal',
  },
  {
    id: 9,
    question: ' Explain @RestController annotation in Spring Boot?',
    category: 'Springboot',
    answer:
      'The @RestController annotation helps you to add @ResponseBody and @Controller annotations to the class. You can also import org.springframework.web.bind.annotation package in your file.',
  },
  {
    id: 10,
    question: 'What are Spring beans?',
    category: 'Springboot',
    answer:
      'Spring beans are the basis of the Spring framework. You can explain them and their management by the IoC container. Example:Spring beans are Java objects that form the foundation of the application. They are initialized by the Spring IoC container and created with the user-supplied configuration metadata.',
  },
  {
    id: 11,
    question:
      'What do you understand by dependency injection and Spring IoC container?',
    category: 'Springboot',
    answer:
      'Spring uses a special design principle called the inversion of control (IoC), which manages wiring dependencies and the dependency injection is one of its aspects. You must have a thorough understanding of both these terms so that you can explain them clearly. Example: IoC gives objects dependencies rather than creating or looking for dependent objects. The DI states that we do not create objects manually, but describe the process of their creation instead. When the application is run, the components and services described will be loosely coupled by required classes in the IoC container.',
  },
  {
    id: 12,
    question: 'Explain what a microservice is in a simple way',
    category: 'Springboot',
    answer:
      "When you're asked to simply describe something, it's important to make sure you are speaking clearly and concisely in a way that other people can understand, even if they aren't technically savvy. Example: \"Microservices are small, contained architecture that makes up part of a larger service. By using microservices, businesses can defer traffic off of one service to many smaller ones, making for more efficient use of resources and end-user experience.",
  },
  {
    id: 13,
    question: 'How to deploy spring boot application in tomcat?',
    category: 'Springboot',
    answer:
      'Whenever you will create your spring boot application and run it, Spring boot will automatically detect the embedded tomcat server and deploy your application on tomcat. After successful execution of your application, you will be able to launch your rest endpoints and get a response.',
  },
  {
    id: 14,
    question: ' What is the difference between Spring and Spring Boot?',
    category: 'Springboot',
    answer:
      'Spring – Is a dependency injection framework.  It is basically used to manage the life cycle of java classes (beans). It consists of a lot of boilerplate configuration.Uses XML based configuration.    It takes time to have a spring application up and running and it’s mainly because of boilerplate code.  Spring boot-  It is a suite of pre- configured frameworks and technologies which helps to remove boilerplate configuration. Uses annotations. It is used to create a production-ready code.',
  },
  {
    id: 15,
    question: 'How to create war file in spring boot?',
    category: 'Springboot',
    answer:
      'To create a war file in spring boot you need to define your packaging file as war in your pom.xml(if it is maven project).Then just do maven clean and install so that your application will start building. Once the build is successful, just go into your Target folder and you can see .war file generated for your application',
  },
  {
    id: 16,
    question: 'What is JPA in spring boot?',
    category: 'Springboot',
    answer:
      'JPA is basically Java Persistence API. It’s a specification that lets you do ORM when you are connecting to a relational database which is Object-Relational Mapping. So, when you need to connect from your java application to relational database, you need to be able to use something like JDBC and run SQL queries and then you get the results and convert them into Object instances. ORM lets you map your entity classes in your SQL tables so that when you connect to the database , you don’t need to do query yourself, it’s the framework that handles it for you.And JPA is a way to use ORM, it’s an API which lets you configure your entity classes and give it to a framework so that the framework does the rest.',
  },
  {
    id: 17,
    question: 'How to save image in database using spring boot?',
    category: 'Springboot',
    answer:
      '    First configure mysql in your spring boot application.    Then you can map your entities with your db tables using JPA.  And with the help of save() method in JPA you can directly insert your data into your database',
  },
  {
    id: 18,
    question: 'What is auto configuration in spring boot?',
    category: 'Springboot',
    answer:
      'AutoConfiguration is a process by which Spring Boot automatically configures all the infrastructural beans. It declares the built-in beans/objects of the spring specific module such as JPA, spring security and so on based on the dependencies present in your applications class path.For example: If we make use of Spring JDBC, the spring boot autoconfiguration feature automatically registers the DataSource and JDBCTemplete bean.This entire process of automatically declaring the framework specific bean without the need of writing the xml code or java config code explicity  is called Autoconfiguration which is done by springBoot with the help of an annotation called @EnableAutoconfiguration alternatively @SpringBootApplication.',
  },
  {
    id: 19,
    question:
      ' How to resolve whitelabel error page in spring boot application?',
    category: 'Springboot',
    answer:
      'Custom Error Controller– where you will be implementing ErrorController  interface which is provided by SpringFramework and then overriding its getErrorPath() so that you can return a custom path whenever such type of error is occurred.By Displaying Custom error page– All you have to do is create an error.html page and place it into the src/main/resources/templates path. The BasicErrorController of of springboot will automatically pick this file by default.By disabling the whitelabel error page– this is the easiest way where all you need to do is server.error.whitelabel.enabled property to false in the application.properties file to disable the whitelabel error page',
  },
  {
    id: 20,
    question: 'What is response entity in spring boot?',
    category: 'Springboot',
    answer:
      'Response Entity is basically an HTTP response which includes headers,status code and body of your response.',  },  {    id: 21,    question: 'How to use logger in spring boot?',    category: 'Springboot',    answer: 'There are many logging options available in SpringBoot. Some of them are mentioned below:  Using log4j2: 1234	import org.apache.logging.log4j.Logger;import org.apache.logging.log4j.LogManager;// [...]Logger logger = LogManager.getLogger(LoggingController.class);    Using Lombok:All you need to do is add a dependency called org.projectlombok in your pom.xml as shown below:123456	<dependency> <groupId>org.projectlombok</groupId><artifactId>lombok</artifactId><version>1.18.4</version><scope>provided</scope></dependency>Now you can create a loggingController and add the @Slf4j annotation to it. Here we would not create any logger instances.@RestController @Slf4j public class LoggingController { @RequestMapping("/logging")public String index() {log.trace("A TRACE Message");log.debug("A DEBUG Message");log.info("An INFO Message");log.warn("A WARN Message");log.error("An ERROR Message");  return "Here are your logs!”;}}',
  },
];