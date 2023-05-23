import React from 'react';
import { GridComponent,
        ColumnsDirective,
        ColumnDirective,
        Page,
        Inject,
        Sort,
        Search,
        Toolbar
      } from '@syncfusion/ej2-react-grids';
import results from './result.json';
import  './TableStyle.css'
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkXlpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSH5Vd0RiXXted3BXQw==;Mgo+DSMBPh8sVXJ0S0J+XE9AdFRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31Td0VlWH5fdHBVQWVbVA==;ORg4AjUWIQA/Gnt2VVhkQlFacl1JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjX35fcXBRRmdbUEE=;ODkwMDkzQDMyMzAyZTM0MmUzMERCMG1yTHhHUWQrL2l6YTRieFFuSFQwS3B2R1AwZ1k2UUZlaVNCZlhtUjg9;ODkwMDk0QDMyMzAyZTM0MmUzMEJmclBVaFlCcWhrVDFSSHVzTXpWZVRCNTUvTU0zTjViOGhrRnQxV1R2Mjg9;NRAiBiAaIQQuGjN/V0Z+WE9EaFtAVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUViWXlfcXVRQmBUVUxz;ODkwMDk2QDMyMzAyZTM0MmUzMGk3bFlncGx2cWNFM1lUbWZOczF3b3c3eTV4S2pyY0pBdUNOYUdDUEtiL3M9;ODkwMDk3QDMyMzAyZTM0MmUzME9HQXJMcFdEcWlNeUw0SGxPVjJzNG9majhmM0lKY252TjAvY3Z4Y29rcGM9;Mgo+DSMBMAY9C3t2VVhkQlFacl1JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjX35fcXBRRmlfU0E=;ODkwMDk5QDMyMzAyZTM0MmUzMEcxL2pwWHFnbkhlYlBXQUswNUFkbEVKenRXNWJiMWRqT3g5RmJEYnZGUkk9;ODkwMTAwQDMyMzAyZTM0MmUzMFFOQnNjTmVZRVRwSG5NS0J4VUxNQUFEUEk1SWpHSzdvRTdwajlQR2ZHSzA9;ODkwMTAxQDMyMzAyZTM0MmUzMGk3bFlncGx2cWNFM1lUbWZOczF3b3c3eTV4S2pyY0pBdUNOYUdDUEtiL3M9"
);


function PublishedResult(props) {
  
  const toolbarOptions=['Search'] 
  return (
    <div style={{margin : '2%' , marginTop :'1%'}} >
        <GridComponent dataSource={props.data}
        allowPaging={true}
        pageSettings={{pageSize :10}}
        allowSorting ={true}
        toolbar={toolbarOptions}
        >
        <ColumnsDirective >
            <ColumnDirective field='Course_Code' headerText='Course Code' textAlign ='Left' width='150' />
            <ColumnDirective field='Course_Credit' headerText='Course Crdit'  textAlign ='Left' width='150'  />
            <ColumnDirective field='Level_Term' headerText='Level - Term' textAlign ='Left' width='150' />
            <ColumnDirective field='Sessional' headerText='Sessional' textAlign ='Left' width='100'  />
            <ColumnDirective field='Result' headerText='Result' textAlign ='Left' width='100'   />
            <ColumnDirective field='Regular' headerText='Regular' textAlign ='Left' width='150'  />
        </ColumnsDirective>
        {
          results.map((r)=>{
            return(
              <ColumnsDirective>
                {
                  Object.keys(r).map((key,index)=>{
                    return (
                      <>
                      <div>{r[key]}</div>
                      </>
                    );
                  })
                }
              </ColumnsDirective>
            );
          })
        }
        <Inject services={[Page, Sort, Search,Toolbar]} />
        </ GridComponent>
      
    </div>
  )
}

export default PublishedResult
