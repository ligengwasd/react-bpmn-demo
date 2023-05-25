import React, { Component } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-font/dist/css/bpmn-embedded.css";
import { emptyBpmn } from "./asset/empty.bpmn";
import propertiesPanelModule from "bpmn-js-properties-panel";
import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";
import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css";
import { Button } from "react-bootstrap";
import EditMenuBar from "./EditMenuBar";

// import BpmnModelerTest from '../Modeler/BpmnModeler';

class BpmnEditor extends Component {
  modeler = null;

  setEncoded = (link, name, data) => {
    var encodedData = encodeURIComponent(data);

    console.log(encodedData);

    if (data) {
      link.href = "data:application/bpmn20-xml;charset=UTF-8," + encodedData;
      link.setAttribute("download", name);
    }
  };

  saveModelHandler = (event) => {
    event.preventDefault();
    //console.log(this.modeler.encodedData);
    //const data = this.modeler.saveXML();
    this.setEncoded(event.target, "diagram.svg", emptyBpmn);
    // post request to save the model
    // implement a method to run the request from the backend for POST Model - Interpretation Engine
  };

  componentDidMount = () => {
    this.modeler = new BpmnModeler({
      container: "#bpmnview",
      keyboard: {
        bindTo: window
      },
      propertiesPanel: {
        parent: "#propview"
      },
      additionalModules: [propertiesPanelModule, propertiesProviderModule],
      moddleExtensions: {
        camunda: camundaModdleDescriptor
      }
    });

    this.newBpmnDiagram();
  };

  newBpmnDiagram = () => {
    this.openBpmnDiagram(emptyBpmn);
  };

  openBpmnDiagram = (xml) => {
    this.modeler.importXML(xml, (error) => {
      if (error) {
        return console.log("fail import xml");
      }

      var canvas = this.modeler.get("canvas");

      canvas.zoom("fit-viewport");
    });
  };

  render = () => {
    return (
      <>
        <EditMenuBar></EditMenuBar>
        <div
          id="TABS-osnld2Uuaf"
          className="ant-tabs ant-tabs-top ant-tabs-editable ant-tabs-card ant-tabs-editable-card css-14r76du"
        >
          <div id="bpmncontainer">
            <div
              id="propview"
              style={{
                width: "25%",
                height: "98vh",
                float: "right",
                maxHeight: "98vh",
                overflowX: "auto",
                backgroundColor: "white"
              }}
            ></div>
            <div
              id="bpmnview"
              style={{ width: "75%", height: "98vh", float: "left" }}
            ></div>
          </div>
        </div>
        <Button
          onClick={this.saveModelHandler}
          variant="primary"
          type="submit"
          style={{ border: "1px solid #008B8B", marginTop: "10px" }}
        >
          Save
        </Button>

        <div style={{ marginTop: "40px", paddingTop: "10px" }}></div>
      </>
    );
  };
}

export default BpmnEditor;
