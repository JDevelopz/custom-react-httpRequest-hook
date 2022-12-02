import React, {useState} from 'react';

const useHttpRequest = (requestConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () =>  {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url,{
              method: requestConfig.method ? requestConfig.method : 'GET',
              headers: requestConfig.headers ? requestConfig.headers : {},
              body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });

             if (!response.ok) {
               throw new Error('Request failed!');
             }
             console.log(response);

             const data = await response.json();
             console.log(data); 

             applyData(data);
            }catch (error) {
                setError(error.message || 'Something went wrong!');
            }
            setIsLoading(false);
    };

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest,
    }
};

export default useHttpRequest;



// const fetchTasks = async (taskText) => {
//     setIsLoading(true);
//     setError(null);
    
//       const data = await response.json();

//       const loadedTasks = [];

//       for (const taskKey in data) {
//         loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//       }

//       setTasks(loadedTasks);
//     } catch (err) {
//       setError(err.message || 'Something went wrong!');
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   //----------------------------------

//   const enterTaskHandler = async (taskText) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         'https://react-test-app-83e22-default-rtdb.firebaseio.com/tasks.json',
//         {
//           method: 'POST',
//           body: JSON.stringify({ text: taskText }),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Request failed!');
//       }

//       const data = await response.json();

//       const generatedId = data.name; // firebase-specific => "name" contains generated id
//       const createdTask = { id: generatedId, text: taskText };

//       props.onAddTask(createdTask);
//     } catch (err) {
//       setError(err.message || 'Something went wrong!');
//     }
//     setIsLoading(false);
//   };