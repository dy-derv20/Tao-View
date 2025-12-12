from fastapi import FastAPI 
from bittensor import Subtensor
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



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
def get_subnet_names():
    """"
    Calls: Subtensor.get_all_subnets_info()
    Parameters: None
    Returns: List of SubnetInfo objects
    """

   
    
    print("Ready to query subnet..")
    subnets = subtensor.all_subnets()
    print("Querry processed")
        
        
        #subnet_dicts = [subnet.__dict__ for subnet in subnets]
        #I want  only netuid , kappa
    return [subnet.subnet_name for subnet in subnets]
    

#2. GET TOTAL EMISSIONS
@app.get("/api/emissions")
def total_emissions():
    """
    Calls: Subtensor.get_total_emission()
    Parameters: None
    Returns: Integer total network emission value
    """
    total = subtensor.get_total_emission()
    return {"total_emission": total}




