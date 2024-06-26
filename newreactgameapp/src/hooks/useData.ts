import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";




//help us shaping our data in the form of our interfaces(type) props to pass data from parent component to child


interface FetchResponse<T>{
    count: number;
    results: T[];
}


const useData = <T> (endpoint: string) => {
        // we need our useStates to help us render update our UI with our games and others
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState("")
        const [isLoading, setIsLoading] = useState(false);

    
        //create a hellper function to help us fetch our code
        // const fetchGames = () => {
         
        // }
    
        //UseEffect to fetch our data
     useEffect(() => {
        // fetchGames();

        //We need an instance of AbortController() to help us unsubscribe to the api, we are going to save it variable
        const controller = new AbortController();

        apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
        .then(response => {
            setIsLoading(false)
            setData(response.data.results)
    
    
          })
        .catch(error => {
            if(error instanceof CanceledError) return
            setError(error.message);
        });

        return () => controller.abort();
    
     }, []);

return {data, error, isLoading}

}

export default useData;