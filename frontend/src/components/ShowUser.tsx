import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SymptomInterface } from "../models/UI";
import { DataGrid, GridColDef } from "@mui/x-data-grid";


function Users() {

 const [users, setUsers] = React.useState<SymptomInterface[]>([]);

 const getUsers = async () => {
   const apiUrl = "http://localhost:8080/getSymptom";
   const requestOptions = {
     method: "GET",
     headers: { "Content-Type": "application/json" },
   };
   fetch(apiUrl, requestOptions)
     .then((response) => response.json())
     .then((res) => {
       if (res.data) {
         setUsers(res.data);
       }
     });
 };

 const columns: GridColDef[] = [
   { field: "ID", headerName: "ID", width: 50 },
   { field: "Temperature", headerName: "Temperature", width: 100 },
   { field: "Pressure", headerName: "Pressure", width: 100 },
   { field: "Heart_rate", headerName: "Heart Rate", width: 100 },
   { field: "Comment", headerName: "Comment", width: 150 },
   { field: "Medicine", headerName: "Medicine", width: 200 },
   { field: "Check_date", headerName: "Date", width: 150 },
   { field: "CheckID", headerName: "Owner", width: 150 },
   { field: "LevelID", headerName: "Level", width: 200 },
   { field: "MapbID", headerName: "Map Bed", width: 100 },
 ];


 useEffect(() => {
   getUsers();
 }, []);

 return (
   <div>
     <Container maxWidth="md">
       <Box
         display="flex"
         sx={{
           marginTop: 2,
         }}
       >
         <Box flexGrow={1}>
           <Typography
             component="h2"
             variant="h6"
             color="primary"
             gutterBottom
           >
            Symptom
           </Typography>
         </Box>
         <Box>
           <Button
             component={RouterLink}
             to="/"
             variant="contained"
             color="primary"
           >
             Create Symptom
           </Button>
         </Box>
       </Box>
       <div style={{ height: 400, width: "100%", marginTop: '20px'}}>
         <DataGrid
           rows={users}
           getRowId={(row) => row.ID}
           columns={columns}
           pageSize={5}
           rowsPerPageOptions={[5]}
         />
       </div>
     </Container>
   </div>
 );
}

export default Users;