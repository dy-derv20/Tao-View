import axios from "axios";

export async function fetchSubnets(): Promise<string[]> {
  const res = await axios.get("http://127.0.0.1:8000/api/subnets");
  if(Object.keys(res).length === 0){
    console.log("Backend did not pass through list");
  }
  return res.data; // ["Subnet1", "Subnet2", ...]
}
