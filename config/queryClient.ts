import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // if user changes page and comes back in 5mints then instead new api call use the cache data
            gcTime: 10 * 1000 * 60, // kept the data for 10mints in cache
            refetchOnReconnect: true,
            refetchOnMount: true,
            retry: 1
        },
        mutations: { // add, delete, update
            retry: 0 // don't retry again (doing this to avoid retries on network failure)
        }
    }
});