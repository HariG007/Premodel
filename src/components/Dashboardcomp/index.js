import { useState } from 'react';

// material-ui
import {
  Grid,
  Typography
} from '@mui/material';

import SalesColumnChart from '../Dashboardcomp/SalesColumnChart';
import MainCard from '../Dashboardcomp/MainCard';
import AnalyticEcommerce from '../Dashboardcomp/AnalyticEcommerce';



// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      
      <Grid  item xs={12} sm={6} md={4} lg={3}>
        <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}>
        <AnalyticEcommerce  title="Positioning Mode" count="Kinematics" />
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}>
        <AnalyticEcommerce title="Solution Status" count="-" />
        </div>
      </Grid>

      <Grid item xs={12}  sx={{ mb: -2.25 }} >
        <div>
        <Typography variant="h5">Position</Typography>
        </div>
      </Grid>

      <Grid item xs={8} >
        <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
        <AnalyticEcommerce title="Latitude" count="0°"   extra="± 0.000 m" />
        </div>
        <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
        <AnalyticEcommerce title="Longitude" count="0°"  extra="± 0.000 m" />
        </div>
        <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
        <AnalyticEcommerce title="Height" count="0 m" extra="± 0.000 m" />
        </div>
      </Grid>

    

      <Grid item xs={6} sm={6} md={4} lg={3}>
      <h3>Velocity</h3>
      <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
      <AnalyticEcommerce title="East" count="0 m/s"   />
      </div>
      <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
      <AnalyticEcommerce title="North" count="0 m/s"  />
      </div>
      <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
      <AnalyticEcommerce title="Up" count="0 m/s"  />
      </div>
      </Grid>

    

      <Grid item xs={8}>
      <h3>Base Position</h3>
      <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
      <AnalyticEcommerce title="Latitude" count="0°"   />
      </div>
      <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
      <AnalyticEcommerce title="Longitude" count="0°"  />
      </div>
      <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
      <AnalyticEcommerce title="Height" count="0 m"  />
      </div>
      </Grid>
      
     
     

      <Grid item xs={6} sm={6} md={4} lg={3}>
        <h3>RTK Parameters</h3>
        <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
        <AnalyticEcommerce count="0.0s"  extra="Age of differential"  />
        </div>
        <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
        <AnalyticEcommerce count="0.o" extra="AR validation ratio" />
        </div>
        <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px',marginBottom:'10px'}}>
        <AnalyticEcommerce count="0.00 m" extra="Baseline" />
        </div>
      </Grid>
 
      {/* row 4 */}
      <Grid item xs={12} >
       
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Signal-to-noise Ratio</Typography>
          </Grid>
        </Grid>

        <div style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}>
        <MainCard sx={{ mt: 1.75 }}>
          <SalesColumnChart />
        </MainCard>
        </div>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
