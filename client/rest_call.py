from multiprocessing.dummy import Pool
import requests

pool = Pool(1) # Creates a pool with ten threads; more threads = more concurrency.
                # "pool" is a module attribute; you can be sure there will only
                # be one of them in your application
                # as modules are cached after initialization.

if __name__ == '__main__':
    for y in range (1000000):
        futures = []
        for x in range(100):
            futures.append(pool.apply_async(requests.get, ['http://localhost:12000/hellobello']))
        # futures is now a list of 10 futures.
        for future in futures:
            print(future.get()) # For each future, wait until the request is
                                # finished and then print the response object.
