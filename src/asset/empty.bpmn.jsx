export const emptyBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_07hxymd" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="4.12.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.15.0">
  <bpmn:process id="Process_app_maintenance" name="業務アラート対応" isExecutable="true">
    <bpmn:sequenceFlow id="Flow_171qa95" name="アラート発生" sourceRef="StartEvent_1" targetRef="Gateway_0ww3t1z" />
    <bpmn:task id="Activity_1tdrnc6" name="正常性確認">
      <bpmn:incoming>Flow_19j2m82</bpmn:incoming>
      <bpmn:outgoing>Flow_1qtxwig</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_19j2m82" name="ERROR" sourceRef="Gateway_0ww3t1z" targetRef="Activity_1tdrnc6" />
    <bpmn:task id="Activity_1q7auu3" name="調査">
      <bpmn:incoming>Flow_1qtxwig</bpmn:incoming>
      <bpmn:incoming>Flow_19sbdva</bpmn:incoming>
      <bpmn:outgoing>Flow_13cgrt8</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_1qtxwig" sourceRef="Activity_1tdrnc6" targetRef="Activity_1q7auu3" />
    <bpmn:exclusiveGateway id="Gateway_0ww3t1z" name="ログレベル">
      <bpmn:extensionElements>
        <camunda:properties>
          <camunda:property />
        </camunda:properties>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_171qa95</bpmn:incoming>
      <bpmn:outgoing>Flow_19j2m82</bpmn:outgoing>
      <bpmn:outgoing>Flow_04nulux</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:startEvent id="StartEvent_1" camunda:formKey="alertMail">
      <bpmn:extensionElements>
        <camunda:formData businessKey="subject">
          <camunda:formField id="subject" label="件名" type="string" />
          <camunda:formField id="mail_body" label="本文" type="string" />
        </camunda:formData>
        <camunda:properties>
          <camunda:property name="property1" />
          <camunda:property />
        </camunda:properties>
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_171qa95</bpmn:outgoing>
      <bpmn:messageEventDefinition id="MessageEventDefinition_0we09ql" />
    </bpmn:startEvent>
    <bpmn:exclusiveGateway id="Gateway_149dj3z" name="新規性">
      <bpmn:incoming>Flow_04nulux</bpmn:incoming>
      <bpmn:outgoing>Flow_19sbdva</bpmn:outgoing>
      <bpmn:outgoing>Flow_074rni1</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_04nulux" name="WARN" sourceRef="Gateway_0ww3t1z" targetRef="Gateway_149dj3z" />
    <bpmn:sequenceFlow id="Flow_19sbdva" name="新規アラート" sourceRef="Gateway_149dj3z" targetRef="Activity_1q7auu3" />
    <bpmn:task id="Activity_0nadjsp" name="静観">
      <bpmn:incoming>Flow_074rni1</bpmn:incoming>
      <bpmn:outgoing>Flow_0ju658x</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_074rni1" name="既知アラート" sourceRef="Gateway_149dj3z" targetRef="Activity_0nadjsp" />
    <bpmn:endEvent id="Event_0ug7yut">
      <bpmn:incoming>Flow_0ju658x</bpmn:incoming>
      <bpmn:incoming>Flow_13cgrt8</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_0ju658x" sourceRef="Activity_0nadjsp" targetRef="Event_0ug7yut" />
    <bpmn:sequenceFlow id="Flow_13cgrt8" sourceRef="Activity_1q7auu3" targetRef="Event_0ug7yut" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_app_maintenance">
      <bpmndi:BPMNEdge id="Flow_171qa95_di" bpmnElement="Flow_171qa95">
        <di:waypoint x="188" y="417" />
        <di:waypoint x="335" y="417" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="229" y="399" width="66" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_19j2m82_di" bpmnElement="Flow_19j2m82">
        <di:waypoint x="360" y="442" />
        <di:waypoint x="360" y="530" />
        <di:waypoint x="510" y="530" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="310" y="483" width="40" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1qtxwig_di" bpmnElement="Flow_1qtxwig">
        <di:waypoint x="610" y="530" />
        <di:waypoint x="630" y="530" />
        <di:waypoint x="630" y="447" />
        <di:waypoint x="730" y="447" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_04nulux_di" bpmnElement="Flow_04nulux">
        <di:waypoint x="360" y="392" />
        <di:waypoint x="360" y="210" />
        <di:waypoint x="415" y="210" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="373" y="313" width="34" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_19sbdva_di" bpmnElement="Flow_19sbdva">
        <di:waypoint x="440" y="235" />
        <di:waypoint x="440" y="290" />
        <di:waypoint x="780" y="290" />
        <di:waypoint x="780" y="377" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="483" y="263" width="66" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_074rni1_di" bpmnElement="Flow_074rni1">
        <di:waypoint x="440" y="185" />
        <di:waypoint x="440" y="120" />
        <di:waypoint x="540" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="462" y="150" width="66" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ju658x_di" bpmnElement="Flow_0ju658x">
        <di:waypoint x="640" y="120" />
        <di:waypoint x="781" y="120" />
        <di:waypoint x="781" y="230" />
        <di:waypoint x="942" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_13cgrt8_di" bpmnElement="Flow_13cgrt8">
        <di:waypoint x="830" y="417" />
        <di:waypoint x="886" y="417" />
        <di:waypoint x="886" y="230" />
        <di:waypoint x="942" y="230" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Gateway_1nuw42t_di" bpmnElement="Gateway_0ww3t1z" isMarkerVisible="true">
        <dc:Bounds x="335" y="392" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="412" y="410" width="55" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1uah14q_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="152" y="399" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0nadjsp_di" bpmnElement="Activity_0nadjsp" bioc:stroke="#1e88e5" bioc:fill="#bbdefb" color:background-color="#bbdefb" color:border-color="#1e88e5">
        <dc:Bounds x="540" y="80" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_149dj3z_di" bpmnElement="Gateway_149dj3z" isMarkerVisible="true">
        <dc:Bounds x="415" y="185" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="484" y="203" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1q7auu3_di" bpmnElement="Activity_1q7auu3" bioc:stroke="#e53935" bioc:fill="#ffcdd2" color:background-color="#ffcdd2" color:border-color="#e53935">
        <dc:Bounds x="730" y="377" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0ug7yut_di" bpmnElement="Event_0ug7yut">
        <dc:Bounds x="942" y="212" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1tdrnc6_di" bpmnElement="Activity_1tdrnc6" bioc:stroke="#43a047" bioc:fill="#c8e6c9" color:background-color="#c8e6c9" color:border-color="#43a047">
        <dc:Bounds x="510" y="490" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;
