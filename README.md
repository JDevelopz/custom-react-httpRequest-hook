# custom-react-httpRequest-hook
Custom hook for React HTTP/HTTPS requests in version 18.0.0
--------------------------------------------------------------
<h2> How to use the custom hook </h2>

<h3>Download and import the file</h3>

1. In your projects folder > src > create a folder named 'hooks'.

2. Download this file 'use-httpRequest.js' from this repository and add it to the folder 'hooks'.

3. In the component you need to use a http request you need to import the code, depending on your folder structure it should look something like this. 

``` import useHttpRequest from './hooks/use-httpRequest'; ```

4. The custom hook can now be called and destructured by typing: 

``` useHttpRequest(); ```

<hr> 

The custom hook has 2 parameters, parameter(1) ask for the request settings, parameter(2) ask for a function to forward the recieved data. The default setting is a 'GET' request.

``` const useHttpRequest = (requestConfig, applyData) => {}```


The custom hooks forwards 2 states, a loading state & an error state and a function pointer. 

```
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest,
```
<hr>

<h3> Making a 'GET' request. </h3>

To make a 'GET' request you need to import the custom hook as explained in the previous steps. In the component you want to make a request you need to call the custom hook useHttpRequest(). 

FunctionPointer = your function that active the response
<br> 
url = Your own api url
<br> 
dataRecieverFunction = Your own function where you want to use the recieved data from the response. 

```
const {isLoading, error, sendRequest: FunctionPointer } = useHttpRequest({
    url:'your-api-link/objectName.json'}, dataRecieverFunction);
```
