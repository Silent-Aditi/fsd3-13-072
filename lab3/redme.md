# crud operation 
c:- create/add/insert
r:-retrive/view/get
u:-update/edit
d:- delete/remove
## fs:- file system :- it is a node library and interact directly with os.
it direct connect with client os rater than browser 
## major task of fs module  
- Reading and writing files
    - readFiles()
    - writeFile()
    - appendFile()
- DIRECTORY MANAGMENT
    - mkdir()
    - rmdir() - depricated
    - rm()
    - readdir()
- metadta/Information
    - stat()
    - Lstat()
    - Fstat()
- Watching for changes
    - watch ()
    - watch files()
    - unwatchfile()
- streaming large file
    - createReadsStream()
    - createWriteStream()
- File Operations
    - rename()
    - truncate()
    - unlink()
    - link()
    - syslink()
<!-- CRUD OPERATION-->
each item id, name, price , quantity
<!-- opERATIONS -->
1. add to cart
2. show cart
3. remove items from cart
4. update quantity from cart
5. checkout
## Node Package Manager (NPM)

used to install, run, uninstall any program/project and package

- npm install <packagename>
- npm uninstall <packagename>

to use npm, the project must be npm project,
to create npm project we can use

- npm init -y
- it creates a package.json file automatically
  package.json holds all the information related to install
  packages from npm
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modules by .gitignoree  
## Status Codes
- 200 -> 0k
- 201 -> created
- 400 -> bad req
- 403 -> forbidden
- 404 -> not found
- 500 ->internal server error


# Content Type

- text/plain
- text/html
- application/json
- text/css

The content type and status code can be send back to client by two ways.

1. res.writeHead
2. res.setHeader
3. res.statusCode

