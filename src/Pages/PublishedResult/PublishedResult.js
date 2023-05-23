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
import Data from './result.json';
import './TableStyle.css'


function PublishedResult() {
  const toolbarOptions=['Search']
  return (
    <div style={{margin : '2%' , marginTop :'1%'}} >
        <GridComponent dataSource={Data}
        allowPaging={true}
        pageSettings={{pageSize :10}}
        allowSorting ={true}
        toolbar={toolbarOptions}
        >
        <ColumnsDirective >
            <ColumnDirective field='Course Code' headerText='Course Code' textAlign ='Left' width='150' />
            <ColumnDirective field='Course Credit' headerText='Course Crdit'  textAlign ='Left' width='150'  />
            <ColumnDirective field='Level Term' headerText='Level - Term' textAlign ='Left' width='150' />
            <ColumnDirective field='Sessional' headerText='Sessional' textAlign ='Left' width='100'  />
            <ColumnDirective field='Result' headerText='Result' textAlign ='Left' width='100'   />
            <ColumnDirective field='Regular' headerText='Regular' textAlign ='Left' width='150'  />
        </ColumnsDirective>
        <Inject services={[Page, Sort, Search,Toolbar]} />
        </ GridComponent>
      
    </div>
  )
}

export default PublishedResult
