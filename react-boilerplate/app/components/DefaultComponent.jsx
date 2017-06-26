import React from 'react';
//import {Tab, Tabs, DropdownButton, MenuItem} from 'react-bootstrap';

export default class MainComponent extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
	<div>
	    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
	        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
	        <Tab eventKey={2} title="Tab 2">
	            <DropdownButton title="Dropdown" id="bg-nested-dropdown">
	                <MenuItem eventKey="1"><div>jose<span>luis</span></div></MenuItem>
		    <MenuItem eventKey="2">Dropdown link</MenuItem>
                         </DropdownButton>
	        </Tab>
	        <Tab eventKey={3} title="Tab 3">Tab 3 content</Tab>
	    </Tabs>
	</div>
        )
    }
}