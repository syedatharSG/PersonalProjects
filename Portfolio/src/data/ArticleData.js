
const url = 'https://getlinkpreview.onrender.com/';
const requestUrl = 'https://www.youtube.com/watch?v=-OO1FqnjVuQ&ab_channel=TheMacLife'; // Replace with the URL you want to preview

// JSON request payload
const requestData = {
  url: requestUrl
};
let storedImageURL;
// Make a POST request using fetch
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(requestData)
})
  .then(response => response.json())
  .then(data => {
    storedImageURL = data.image;
    // Handle the response data here
    doSomethingWithImageURL(storedImageURL);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  console.log("storedImageURL is: ", storedImageURL);

  function doSomethingWithImageURL(imageURL) {
    console.log('Image URL:', imageURL);
    console.log(storedImageURL);
  }

export const articleData = [ 
  
    {
        title: "Prep for Coding Interviews",
        date: "September 4, 2023",
        content:     <>
        <p>
        Coding interview can be stressful! Hence, it is imperative that we all do the utmost to prepare for these interview. Here are a list of few resources
        that I've found helpful when preparing for the interview:
      </p>

      
      {/* ... (content continues) ... */}
      
      <h2>Bracket Pair Colorizer</h2>
      <p>
        <em>Bracket Pair Colorizer</em> can highlight matching brackets in the editor, so developers can easily
        understand which 2 brackets belong to each other. By default <code>()</code>, <code>[]</code>, and <code>{}</code>
        are matched, but you can also configure custom bracket characters.
      </p>
      
      <h2>NPM</h2>
      <p>
        <strong>NPM</strong> is a super handy extension for VS Code that runs the npm scripts in your <code>package.json</code>
        file and also it validates the packages installed in your project, which are listed in the <code>package.json</code> file.
      </p>
      
      {/* ... (more content) ... */}
      
      <p>
        There are so many extensions on the VS Code Marketplace that are helpful when doing software development, but to find
        the best among them will take some getting used to. The list provided here includes some of the best extensions,
        and it will be updated regularly to add more extensions that may come in the future.
      </p>

      </>,
        imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
        codeSnippets: [
          `function greet() {
             console.log("Hello, world!");
          }`,
          `function add(a, b) {
             return a + b;
          }`
        ],
    },
    {
        title: "Getting Started with Tailwind CSS",
        date: "August 8, 2023",
        content:     <>
        <p>
        Visual Studio Code (VS Code) is the most popular coding editor for developers made by Microsoft.
        It is a free and open source software made by developers for developers. According to the Stack Overflow
        2022 survey, VS Code is the IDE of choice across all developers.
      </p>
      
      {/* ... (content continues) ... */}
      
      <h2>Bracket Pair Colorizer</h2>
      <p>
        <em>Bracket Pair Colorizer</em> can highlight matching brackets in the editor, so developers can easily
        understand which 2 brackets belong to each other. By default <code>()</code>, <code>[]</code>, and <code>{}</code>
        are matched, but you can also configure custom bracket characters.
      </p>
      
      <h2>NPM</h2>
      <p>
        <strong>NPM</strong> is a super handy extension for VS Code that runs the npm scripts in your <code>package.json</code>
        file and also it validates the packages installed in your project, which are listed in the <code>package.json</code> file.
      </p>
      
      {/* ... (more content) ... */}
      
      <p>
        There are so many extensions on the VS Code Marketplace that are helpful when doing software development, but to find
        the best among them will take some getting used to. The list provided here includes some of the best extensions,
        and it will be updated regularly to add more extensions that may come in the future.
      </p>

      </>,
        imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80",
    },
    {
        title: "Getting Started with Tailwind CSS",
        date: "August 8, 2023",
        content:     <>
        <p>
        Visual Studio Code (VS Code) is the most popular coding editor for developers made by Microsoft.
        It is a free and open source software made by developers for developers. According to the Stack Overflow
        2022 survey, VS Code is the IDE of choice across all developers.
      </p>
      
      {/* ... (content continues) ... */}
      
      <h2>Bracket Pair Colorizer</h2>
      <p>
        <em>Bracket Pair Colorizer</em> can highlight matching brackets in the editor, so developers can easily
        understand which 2 brackets belong to each other. By default <code>()</code>, <code>[]</code>, and <code>{}</code>
        are matched, but you can also configure custom bracket characters.
      </p>
      
      <h2>NPM</h2>
      <p>
        <strong>NPM</strong> is a super handy extension for VS Code that runs the npm scripts in your <code>package.json</code>
        file and also it validates the packages installed in your project, which are listed in the <code>package.json</code> file.
      </p>
      
      {/* ... (more content) ... */}
      
      <p>
        There are so many extensions on the VS Code Marketplace that are helpful when doing software development, but to find
        the best among them will take some getting used to. The list provided here includes some of the best extensions,
        and it will be updated regularly to add more extensions that may come in the future.
      </p>

      </>,
        imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80",
    },
    {
        title: "Getting Started with Tailwind CSS",
        date: "August 8, 2023",
        content:     <>
        <p>
        Visual Studio Code (VS Code) is the most popular coding editor for developers made by Microsoft.
        It is a free and open source software made by developers for developers. According to the Stack Overflow
        2022 survey, VS Code is the IDE of choice across all developers.
      </p>
      
      {/* ... (content continues) ... */}
      
      <h2>Bracket Pair Colorizer</h2>
      <p>
        <em>Bracket Pair Colorizer</em> can highlight matching brackets in the editor, so developers can easily
        understand which 2 brackets belong to each other. By default <code>()</code>, <code>[]</code>, and <code>{}</code>
        are matched, but you can also configure custom bracket characters.
      </p>
      
      <h2>NPM</h2>
      <p>
        <strong>NPM</strong> is a super handy extension for VS Code that runs the npm scripts in your <code>package.json</code>
        file and also it validates the packages installed in your project, which are listed in the <code>package.json</code> file.
      </p>
      
      {/* ... (more content) ... */}
      
      <p>
        There are so many extensions on the VS Code Marketplace that are helpful when doing software development, but to find
        the best among them will take some getting used to. The list provided here includes some of the best extensions,
        and it will be updated regularly to add more extensions that may come in the future.
      </p>

      </>,
        imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80",
    },
    {
        title: "Getting Started with Tailwind CSS",
        date: "August 8, 2023",
        content:(
            <div className="text-left">
              <p>
              There are so many extensions on the VS Code Marketplace that are helpful when doing software development, but to find
        the best among them will take some getting used to. The list provided here includes some of the best extensions,
        and it will be updated regularly to add more extensions that may come in the future. 
              </p>
              <img src={storedImageURL}/>
    
              {/* ... (more content) ... */}
            </div>
          ),
        imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80",
        imageUrl2: "https://i.ytimg.com/vi/-OO1FqnjVuQ/maxresdefault.jpg"
    },
]