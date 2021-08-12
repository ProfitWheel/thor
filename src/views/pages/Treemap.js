import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";

am4core.useTheme(am4themes_animated);

export default function Treemap(props) {
    const chart = useRef(null);
  
    useLayoutEffect(() => {
    var x = am4core.create("chartdiv", am4charts.TreeMap);
    x.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    
    // only one level visible initially
    x.maxLevels = 1;
    // define data fields
    x.dataFields.name = "name";
    x.dataFields.value = "audience_size";
    x.dataFields.affinity = "affinity";
    x.dataFields.ri = "ri";
    x.dataFields.children = "children";
    // x.homeText = "Zoom Out";
    
    // enable navigation
    // x.navigationBar = new am4charts.NavigationBar();
    
    // create template of levels
    var columnTemplate1 = x.seriesTemplates.create("0").columns.template;
    var columnTemplate2 = x.seriesTemplates.create("1").columns.template;
    var columnTemplate3 = x.seriesTemplates.create("2").columns.template;

    
    columnTemplate1.stroke = am4core.color("#fff");
    columnTemplate1.strokeWidth = 2;
    columnTemplate1.strokeOpacity = 1;

    columnTemplate2.stroke = am4core.color("#fff");
    columnTemplate2.strokeWidth = 2;
    columnTemplate2.strokeOpacity = 1;

    columnTemplate3.stroke = am4core.color("#fff");
    columnTemplate3.strokeWidth = 2;
    columnTemplate3.strokeOpacity = 1;

    // hover darken
    columnTemplate1.states.create("hover").adapter.add("fill", function (fill, target) {
      if (fill instanceof am4core.Color) {
        return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
      }
      return fill;
    })

    // hover darken
    columnTemplate2.states.create("hover").adapter.add("fill", function (fill, target) {
      if (fill instanceof am4core.Color) {
        return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
      }
      return fill;
    })

    // hover darken
    columnTemplate3.states.create("hover").adapter.add("fill", function (fill, target) {
      if (fill instanceof am4core.Color) {
        return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
      }
      return fill;
    })
    
    //center text
    let interestName1 = columnTemplate1.createChild(am4core.Label);
  // interestName.text = "Loading stuff...";
  interestName1.align = "center";
  interestName1.valign = "middle";
  interestName1.fontSize = 15;
  interestName1.fontWeight = 200;
  interestName1.stroke = am4core.color("#fff");
  interestName1.fill = am4core.color("#fff");
  interestName1.strokeWidth = 0;
  interestName1.width = "100%";
  interestName1.truncate = true;
  interestName1.textAlign = "middle";
  
    
  //   // add adapter for href to load correct image
    interestName1.adapter.add("text", function (href, target) {
      var dataItem = target.parent.dataItem;
      if (dataItem) {
        return dataItem.treeMapDataItem.name;
      }
    });

    //center text
    let interestName2 = columnTemplate2.createChild(am4core.Label);
  // interestName.text = "Loading stuff...";
  interestName2.align = "center";
  interestName2.valign = "middle";
  interestName2.fontSize = 15;
  interestName2.fontWeight = 200;
  interestName2.stroke = am4core.color("#fff");
  interestName2.fill = am4core.color("#fff");
  interestName2.strokeWidth = 0;
  interestName2.width = "100%";
  interestName2.truncate = true;
  interestName2.textAlign = "middle";
    
  //   // add adapter for href to load correct image
    interestName2.adapter.add("text", function (href, target) {
      var dataItem = target.parent.dataItem;
      if (dataItem) {
        return dataItem.treeMapDataItem.name;
      }
    });

    //center text
    let interestName3 = columnTemplate3.createChild(am4core.Label);
  // interestName.text = "Loading stuff...";
  interestName3.align = "center";
  interestName3.valign = "middle";
  interestName3.fontSize = 15;
  interestName3.fontWeight = 200;
  interestName3.stroke = am4core.color("#fff");
  interestName3.fill = am4core.color("#fff");
  interestName3.strokeWidth = 0;
  interestName3.width = "100%";
  interestName3.truncate = true;
  interestName3.textAlign = "middle";
    
  //   // add adapter for href to load correct image
    interestName3.adapter.add("text", function (href, target) {
      var dataItem = target.parent.dataItem;
      if (dataItem) {
        return dataItem.treeMapDataItem.name;
      }
    });

    // x.tooltip.label.fill = am4core.color("red");
  columnTemplate1.tooltipText = `[bold #fff font-size: 14px]{name}[/]
  [#fff]----
  [#fff]Audience Size: {audience_size}
  [#fff]Affinity: {affinity}
  [#fff]Recommended Index: {ri}`;

columnTemplate2.tooltipText = `[bold #fff font-size: 14px]{name}[/]
  [#fff]----
  [#fff]Audience Size: {audience_size}
  [#fff]Affinity: {affinity}
  [#fff]Recommended Index: {ri}`;

columnTemplate3.tooltipText = `[bold #fff font-size: 14px]{name}[/]
  [#fff]----
  [#fff]Audience Size: {audience_size}
  [#fff]Affinity: {affinity}
  [#fff]Recommended Index: {ri}`;

columnTemplate2.events.on("hit", function(ev) {
    // console.log("clicked on ", ev.target.dataItem.dataContext);
    // alert("Hello "+ ev.target.dataItem.dataContext.name);
    props.addToCart({
      name: ev.target.dataItem.dataContext.name,
      audience_size: ev.target.dataItem.dataContext.value,
      affinity: ev.target.dataItem.dataContext.affinity,
      ri: ev.target.dataItem.dataContext.ri,
    });
  });

// columnTemplate1.tooltipHTML = `<center><strong>YEAR {name}</strong></center>
// <hr />
// <table>
// <tr>
//   <th align="left">Cars</th>
//   <td>{cars}</td>
// </tr>
// <tr>
//   <th align="left">Motorcycles</th>
//   <td>{motorcycles}</td>
// </tr>
// <tr>
//   <th align="left">Bicycles</th>
//   <td>{bicycles}</td>
// </tr>
// </table>
// <hr />`;
// columnTemplate1.tooltip.pointerOrientation = "vertical";

  // columnTemplate1.tooltipHTML = `<div>{name}</div>`;

  // columnTemplate1.events.on("hit", function(ev) {
  //   console.log("clicked on ", ev.target.dataItem.dataContext.name);
  //   alert("Hello "+ ev.target.dataItem.dataContext.name);
  // });

    
    x.data = props.data;

          chart.current = x;
          if(document.querySelectorAll('[shape-rendering="auto"]').length) {
          document.querySelectorAll('[shape-rendering="auto"]')[0].parentNode.parentNode.remove();
          }
      return () => {
        x.dispose();
      };
    }, []);
            
  
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }






//   export default function Treemap(props) {
//     const chart = useRef(null);
  
//     useLayoutEffect(() => {
//       let x = am4core.create("chartdiv", am4charts.XYChart);
  
//       x.paddingRight = 20;
  
//       let data = [];
//       let visits = 10;
  
//       for (let i = 1; i < 366; i++) {
//         visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
//         data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
//       }
  
//       x.data = data;
  
//       let dateAxis = x.xAxes.push(new am4charts.DateAxis());
//       dateAxis.renderer.grid.template.location = 0;
  
//       let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
//       valueAxis.tooltip.disabled = true;
//       valueAxis.renderer.minWidth = 35;
  
//       let series = x.series.push(new am4charts.LineSeries());
//       series.dataFields.dateX = "date";
//       series.dataFields.valueY = "value";
//       series.tooltipText = "{valueY.value}";
//       x.cursor = new am4charts.XYCursor();
  
//       let scrollbarX = new am4charts.XYChartScrollbar();
//       scrollbarX.series.push(series);
//       x.scrollbarX = scrollbarX;
  
//       chart.current = x;
  
//       return () => {
//         x.dispose();
//       };
//     }, []);
  
//     return (
//       <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
//     );
//   }