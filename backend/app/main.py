from fastapi import FastAPI 
from bittensor import Subtensor

app = FastAPI()



try:
    subtensor = Subtensor(network = "finney")
    print("LOCAL SUBTENSOR CONNECTED")
except Exception as e :
    print("ERROR RUNNING CONNECTING TO LOCAL SUBTENSOR NODE", e)


@app.get("/")
def root():
    return {"STATUS BACKEND AND LOCAL NODE RUNNING"}


#1. GET ALL SUBNETS
@app.get("/api/subnets")
def get_all_subnets():
    """"
    Calls: Subtensor.get_all_subnets_info()
    Parameters: None
    Returns: List of SubnetInfo objects
    """

    backend_cache = {}
    if not backend_cache:
        try:
            print("Ready to query subnet..")
            subnets = subtensor.get_all_subnets_info()
            print("Query processed")
        except Exception as e:
            print("Error processing query", e)
        
        #subnet_dicts = [subnet.__dict__ for subnet in subnets]
        #I want  only netuid , kappa
        return {"subnets": subnets[:1]}
    else:
        return backend_cache

#2. GET TOTAL EMISSIONS
@app.get("/emissions/total")
def total_emissions():
    """
    Calls: Subtensor.get_total_emission()
    Parameters: None
    Returns: Integer total network emission value
    """
    total = subtensor.get_total_emission()
    return {"total_emission": total}




