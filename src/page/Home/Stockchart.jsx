import { data } from 'autoprefixer';
import { Divide } from 'lucide-react';
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Button } from '@/components/ui/button'
const timeSeries=[
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        key:"Time Series(Daily)",
        label:"1 Day",
        value:1,
    },
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        key:" Weekly Time Series",
        label:"1 Week",
        value:7,
    },
    {
        keyword:"DIGITAL_CURRENCY_DAILY",
        key:" Monthly Time Series",
        label:"1 Month",
        value:30,
    },
]

const Stockchart = () => {
  const[activeLabel, setActiveLabel]=React.useState("1 Day");

    const searies=[
        {
            data:[
                [
                    1719922048552,
                    62704.816681650904
                ],
                [
                    1719925301353,
                    62805.365586281885
                ],
                [
                    1719929431382,
                    62617.284848841926
                ],
                [
                    1719932717194,
                    61993.27247736709
                ],
                [
                    1719936750064,
                    61815.240774380596
                ],
                [
                    1719939879122,
                    61844.57371201113
                ],
                [
                    1719943345126,
                    62094.11258121884
                ],
                [
                    1719946892608,
                    62256.053811755926
                ],
                [
                    1719950556965,
                    61914.98477030604
                ],
                [
                    1719954219905,
                    61936.15561918698
                ],
                [
                    1719957941344,
                    61910.472420665166
                ],
                [
                    1719961641834,
                    62029.4494937256
                ],
                [
                    1719965328909,
                    62069.99123220051
                ],
                [
                    1719968677810,
                    61989.308907058155
                ],
                [
                    1719972491065,
                    61406.34596520202
                ],
                [
                    1719976140648,
                    61242.739675293175
                ],
                [
                    1719979607330,
                    60769.98613066456
                ],
                [
                    1719983387175,
                    60801.25430887933
                ],
                [
                    1719986418730,
                    60961.1908085858
                ],
                [
                    1719990464509,
                    60919.78976803358
                ],
                [
                    1719993973436,
                    60799.45622303615
                ],
                [
                    1719997811196,
                    60417.591806072865
                ],
                [
                    1720000870141,
                    60511.01267592566
                ],
                [
                    1720004813314,
                    60187.361785738554
                ],
                [
                    1720008622841,
                    60184.708109952655
                ],
                [
                    1720012227767,
                    59806.87425955481
                ],
                [
                    1720015357903,
                    60506.81684105061
                ],
                [
                    1720019116910,
                    60217.68768076043
                ],
                [
                    1720022579727,
                    60119.6569758108
                ],
                [
                    1720026687941,
                    60377.64969349297
                ],
                [
                    1720029981455,
                    60324.50778147703
                ],
                [
                    1720033568389,
                    60095.36814276449
                ],
                [
                    1720037437963,
                    59745.8278835818
                ],
                [
                    1720040490281,
                    59563.92273028924
                ],
                [
                    1720044623374,
                    60147.75475815409
                ],
                [
                    1720048081617,
                    60242.774086307996
                ],
                [
                    1720051731868,
                    60182.99341375096
                ],
                [
                    1720054958125,
                    60398.52778331812
                ],
                [
                    1720059091716,
                    58128.71854045257
                ],
                [
                    1720062541076,
                    58985.14563324322
                ],
                [
                    1720065766174,
                    59009.12315743557
                ],
                [
                    1720069890724,
                    58885.9191753607
                ],
                [
                    1720073257267,
                    58843.83146867757
                ],
                [
                    1720076869662,
                    58789.69562511361
                ],
                [
                    1720080151123,
                    58124.717085173885
                ],
                [
                    1720083927772,
                    57698.935090308485
                ],
                [
                    1720087287030,
                    57698.55900732324
                ],
                [
                    1720091249284,
                    57894.75871114661
                ],
                [
                    1720094773930,
                    57706.01159970372
                ],
            ],
        },
    ];

    const options = {
chart:{
      id:"area-datetime",
        type:"area",
        height:350,
        zoom:{
            autoScaleYaxis:true
        }
},
    dataLabels:{
        enabled:false
    },
    xaxis:{
        type:"datetime",
        tickAmount:6,
    },
    colors:["#758AA2"],
    markers:{
        colors:["#fff"],
        strokeColor:"#ff",
        size:0,
        strokeWidth:1,
        style:"hollow",

    },
    tooltip:{
        theme:"dark",
    },
    fill:{
        type:"gradient",
        gradient:{
            shadeIntensity:1,
            opacityFrom:0.7,
            opacityTo:0.9,
            stops:[0,100]
        }
    },
    grid:{
        borderColor:"#47535E",
        strokeDashArray:4,
        show:true
    }
    }

    const handleActiveLabel=(value)=>{
      setActiveLabel(value);
    }
    return (
        <div>
        <div className='space-x-3'>
{timeSeries.map((item)=>
  <Button variant={activeLabel==item.label?"":"outline"}
  onClick={()=>handleActiveLabel(item.label)} key={item.label}>
    {item.label}
  </Button>
)}
        </div>
            <div id="chart-timelines">
                <ReactApexChart options={options} series={searies} type='area' height={350} />
            </div>
        </div>
  )
}

export default Stockchart
