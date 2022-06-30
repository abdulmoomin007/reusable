import { Fragment } from "react";
import Accordian from "./Accordian";

const Content = () => {
  return (
    <Fragment>
      <Accordian title={"Project Structure"}>
        <p>
          It is a good practice to Structure your solution by components meaning
          Divide your Solution by Components. Follow Folder structure – Properly
          organize your code files. Layer your components, keep the web layer
          within its boundaries.
        </p>
        <p>
          Project can be logically modularized into three different layers. This
          three layered abstract architecture can be implemented through a
          proper folder structure that separates different modules into
          different folders.
        </p>
        <ul>
          <li>
            <strong>Controller:</strong> API routes & endpoints
          </li>
          <li>
            <strong>Service Layer:</strong> For business logic
          </li>
          <li>
            <strong>Data Access Layer:</strong> For working with database
          </li>
        </ul>
        <h4>Separate Express 'app' and 'server':</h4>
        <p>
          Avoid the nasty habit of defining the entire Express app in a single
          huge file - separate your 'Express' definition to at least two files:
          the API declaration (app.js) and the networking concerns (WWW). For
          even better structure, locate your API declaration within components.
          <strong> Otherwise:</strong> Your API will be accessible for testing
          via HTTP calls only (slower and much harder to generate coverage
          reports). It probably won't be a big pleasure to maintain hundreds of
          lines of code in a single file.
        </p>
      </Accordian>
      <Accordian title={"Coding Style"}>
        <p>
          Always use naming conventions for variables, constants, functions, and
          classes. Use Configuration files and Environment Variables. One of the
          Node js best practices is using naming conventions for all variables,
          classes, constants and functions you use in your code.
        </p>
        <ul>
          <li>
            Use <strong>lowerCamelCase</strong> – for constants, variables, and
            functions name
          </li>
          <li>
            Use <strong>UpperCamelCase</strong> – for naming classes
          </li>
        </ul>
        <p>
          This practice will help you quickly identify plain variables/functions
          and classes requiring instantiation. Always use related descriptive
          names, but try to keep them short and meaningful.
        </p>
        <h4>Use ESLint</h4>
        <p>
          ESLint is the de-facto standard for checking possible code errors and
          fixing code style, not only to identify nitty-gritty spacing issues
          but also to detect serious code anti-patterns like developers throwing
          errors without classification. Though ESLint can automatically fix
          code styles, other tools like prettier and beautify are more powerful
          in formatting the fix and work in conjunction with ESLint{" "}
          <strong>Otherwise: </strong>
          Developers will focus on tedious spacing and line-width concerns and
          time might be wasted overthinking the project's code style.
        </p>
      </Accordian>
      <Accordian title={"Error Handling"}>
        <p>
          Write Asynchronous Code, Use promises & async/await. Avoid Callbacks!!
        </p>
        <h4>Use Async-Await or promises for async error handling</h4>
        <p>
          Handling async errors in callback style is probably the fastest way to
          hell (a.k.a the pyramid of doom). The best gift you can give to your
          code is using a reputable promise library or async-await instead which
          enables a much more compact and familiar code syntax like try-catch.
        </p>
        <h4>Distinguish operational vs programmer errors</h4>
        <p>
          Operational errors (e.g. API received an invalid input) refer to known
          cases where the error impact is fully understood and can be handled
          thoughtfully. On the other hand, programmer error (e.g. trying to read
          an undefined variable) refers to unknown code failures that dictate to
          gracefully restart the application.
        </p>
        <h4>Exit the process gracefully</h4>
        <p>
          When an unknown error occurs (a developer error, see best practice
          2.3) - there is uncertainty about the application healthiness.
        </p>
        <h4>Catch unhandled promise rejections</h4>
        <p>
          Any exception thrown within a promise will get swallowed and discarded
          unless a developer didn’t forget to explicitly handle it. Even if your
          code is subscribed to <code>process.uncaughtException</code>! Overcome
          this by registering to the event{" "}
          <code>process.unhandledRejection</code>.
        </p>
      </Accordian>
      <Accordian title={"Quality Assurance"}>
        <h4>Always write API (component) testing</h4>
        <p>
          Most projects just don't have any automated testing due to short
          timetables or often the 'testing project' ran out of control and was
          abandoned. For that reason, prioritize and start with API testing
          which is the easiest way to write and provides more coverage than unit
          testing (you may even craft API tests without code using tools like
          Postman). Afterwards, should you have more resources and time,
          continue with advanced test types like unit testing, DB testing,
          performance testing, etc. <strong>Otherwise: </strong>You may spend
          long days on writing unit tests to find out that you got only 20%
          system coverage.
        </p>
        <h4>Detect code issues with a linter</h4>
        <p>
          Use a code linter to check the basic quality and detect anti-patterns
          early. Run it before any test and add it as a pre-commit git-hook to
          minimize the time needed to review and correct any issue. Also check
          Section 3 on Code Style Practices .
        </p>
        <h4>Tag your tests</h4>
        <p>
          Different tests must run on different scenarios: quick smoke, IO-less,
          tests should run when a developer saves or commits a file, full
          end-to-end tests usually run when a new pull request is submitted,
          etc. This can be achieved by tagging tests with keywords like #cold
          #api #sanity so you can grep with your testing harness and invoke the
          desired subset. For example, this is how you would invoke only the
          sanity test group with Mocha: mocha --grep 'sanity'
        </p>
      </Accordian>
      <Accordian title={"Security Practices"}>
        <h4>
          Using Environment Aware, Secured and Hierarchical Configuration File
        </h4>
        <p>
          As security best practices, we should keep our app-level keys easily
          readable from file and environment variables. We should also keep
          secrets outside the committed code and make a config file hierarchy
          for easier accessibility. To meet all this, a perfect and flawless
          configuration setup is required. There are few node.js development
          project structure that are available that can help to do this like rc,
          nconf and config.
        </p>
        <p>
          Also, developers should leverage the power of npmrc file in their
          projects, which can automatically restarts a few environment
          production configurations during npm init like setting up production
          of metadata inside project package.json config file – Author
          name/email/licensing details/version, setting up production of npm
          registry changes, log levels, log messages output level changes,
          installing global modules and many more.
        </p>
        <p>
          Developers can set default values can be set through npmrc file with
          the below commands:
        </p>
        <code style={{ backgroundColor: "lightgrey" }}>
          npm config set init.author.name "Your Name" npm config set
          <br />
          init.author.email "name.lastname@tatvasoft.com" npm config set
          <br />
          init.author.url "http://www.tatvasoft.com" npm config set init.license
          <br />
          "MIT" npm config set init.version "1.0.0"{" "}
        </code>
        <h4>Embrace linter security rules</h4>
        <p>
          Make use of security-related linter plugins such as
          eslint-plugin-security to catch security vulnerabilities and issues as
          early as possible, preferably while they're being coded. This can help
          catching security weaknesses like using eval, invoking a child process
          or importing a module with a string literal (e.g. user input). Click
          'Read more' below to see code examples that will get caught by a
          security linter.
        </p>
        <h3>Prevent query injection vulnerabilities with ORM/ODM libraries</h3>
        <p>
          To prevent SQL/NoSQL injection and other malicious attacks, always
          make use of an ORM/ODM or a database library that escapes data or
          supports named or indexed parameterized queries, and takes care of
          validating user input for expected types. Never just use JavaScript
          template strings or string concatenation to inject values into queries
          as this opens your application to a wide spectrum of vulnerabilities.
          All the reputable Node.js data access libraries (e.g. Sequelize, Knex,
          mongoose) have built-in protection against injection attacks.
        </p>
        <h4>Adjust the HTTP response headers for enhanced security</h4>
        <p>
          Your application should be using secure headers to prevent attackers
          from using common attacks like cross-site scripting (XSS),
          clickjacking and other malicious attacks. These can be configured
          easily using modules like helmet.
        </p>
      </Accordian>
      <Accordian title={"Third Party Libraries"}>
        <p>
          Module in Node.js serves as a functionality organized that is
          associated with multiple JavaScript files. Each module in Node.js
          comes with its context to stop interfering with other modules or
          polluting the global scope.
        </p>
        <h4>Express</h4>
        <p>
          Express, one of the best Node.js libraries, has earned the reputation
          as the library that has the flexible, minimalist web framework for
          NodeJS. Install Express using the npm install command. For that, you
          will have to follow only the list of steps. There is a need to utilize
          the executable Express to generate your application.
        </p>
        <p>
          What makes this library the best is that it serves as a fast,
          unopinionated, minimalist web framework. Express, one of the core
          modules of node JS will be offering the best support with the minimal
          and extensible framework providing a set of common utilities.
        </p>
        <h4>Axios</h4>
        <p>
          Axios in the Node.js community serves as the library, working as a
          promise-based HTTP client for the browser and Node.Js. Axios will be
          offering the JavaScript library to execute HTTP-based requests, which
          works in the precise Browser and the Node.Js-based platforms.
        </p>
        <p>
          The library is also the best for modern browsers, including support
          for IE8 and higher. Axios will be working as the JavaScript library to
          make HTTP requests from the Node.Js or XMLHttpRequests. It works with
          intercept HTTP requests as well as responses and enables client-side
          protection against XSRF.
        </p>
        <h4>CORS</h4>
        <p>
          One of the best node.js packages, CORS offers a Connect/Express based
          middleware, finding the usage to facilitate CORS through multiple
          preferences. Implementing CORS in Node.js ensures accessing numerous
          functionalities on the browser. It is the best library that will be
          favorable for configuring and managing an HTTP server to access
          resources from the same domain.
        </p>
        <p>
          Node.Js libraries to enhance backend development will be beneficial
          for making cross-origin calls and is the most favorable for the modern
          web application: Cross-Origin Resource Sharing (CORS), the HTTP-header
          based mechanism allowing a server to indicate any origins.
        </p>
        <h4>Passport</h4>
        <p>
          Passport, the popular Express-compatible authentication middleware for
          Node.js. authenticates requests. Moreover, Passport does this through
          an extensible set of plugins.
        </p>
        <p>
          The passport serves as the authentication middleware as well as one of
          the best libraries for Node developers. It is flexible and modular and
          turns out to be an Express-based web application.
        </p>
        <h4>Multer</h4>
        <p>
          Multer, a Node.Js middleware for handling multipart as well as
          form-data, finds use for uploading files. Multer will not be
          processing any form which is not multipart.
        </p>
      </Accordian>
    </Fragment>
  );
};

export default Content;
