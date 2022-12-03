import React from "react";

const Blog = () => {
  return (
    <div className="lg:w-3/4 mx-auto my-6 bg-green-300 h-auto rounded-xl px-8 py-12 text-justify">
      <h2 className="text-3xl font-semibold text-green-600 mb-4">Blogs</h2>
      <div className="collapse my-2 rounded-lg shadow-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content flex  lg:justify-between">
          <p>
            What are the different ways to manage a state in a React
            application??
          </p>
          <p className="text-2xl font-bold">+</p>
        </div>
        <div className="collapse-content bg-green-500 text-justify text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content">
          <p>
            The built-in way that React provides for setting component states is
            by using setState() and adding “local state” to a class. There are
            several other ways to manage state​s in React, including the use of:
            <br />
            Hooks React Context API Apollo Link State
          </p>
        </div>
      </div>
      <div className="collapse my-2 rounded-lg shadow-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content flex justify-between">
          <p> How does prototypical inheritance work?</p>
          <p className="text-2xl font-bold">+</p>
        </div>
        <div className="collapse-content bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content">
          <p>
            {" "}
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use (Object.getPrototypeOf) and Object
          </p>
        </div>
      </div>
      <div className="collapse my-2 rounded-lg shadow-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content flex justify-between">
          <p> What is a unit test? Why should we write unit tests?</p>
          <p className="text-2xl font-bold">+</p>
        </div>
        <div className="collapse-content bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content">
          <p>
            Unit testing is an important step in the development process,
            because if done correctly, it can help detect early flaws in code
            which may be more difficult to find in later testing stages. <br />
            We should use it cause Unit testing ensures that all code meets
            quality standards before it's deployed. This ensures a reliable
            engineering environment where quality is paramount. Over the course
            of the product development life cycle, unit testing saves time and
            money, and helps developers write better code, more efficiently.
          </p>
        </div>
      </div>
      <div className="collapse my-2 rounded-lg shadow-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content flex justify-between">
          <p> React vs. Angular vs. Vue?</p>
          <p className="text-2xl font-bold">+</p>
        </div>
        <div className="collapse-content bg-green-500 text-primary-content peer-checked:bg-green-600 peer-checked:text-secondary-content">
          <p>
            {" "}
            React is more suitable for intermediate to advanced JavaScript
            developers who are familiar with concepts from ES6 and up, while
            Angular favors those same developers who are also familiar with
            TypeScript.
            <br /> Vue is generally more suited to smaller, less complex apps
            and is easier to learn from scratch compared to React. Vue can be
            easier to integrate into new or existing projects and many feel its
            use of HTML templates along with JSX is an advantage. Overall, Vue
            might be the best choice if you’re a newer developer and not as
            familiar with advanced JavaScript concepts, while React is quite
            well suited for experienced programmers and developers who have
            worked with object-oriented JavaScript, functional JavaScript, and
            similar concepts. <br />
            A large library like Angular would require more diligence in keeping
            up with what’s new, while Vue would be less demanding in this regard
            and the fact that the two most recent major releases of Vue are in
            separate repositories helps. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
