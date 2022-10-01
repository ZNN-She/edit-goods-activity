import React, { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from 'antd-mobile';
import html2canvas from 'html2canvas'
import Edit from './components/edit';
import Pervirew from './components/preview';
import img1 from './assets/images/1.png'
import img2 from './assets/images/2.png'
import img3 from './assets/images/3.jpeg'
import img4 from './assets/images/4.png'
import './App.css';

function App() {
  const containerRef: any = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState([
    {name: 'goods1', label: '红番茄', value: '2.3', url: img1},
    {name: 'goods2', label: '麒麟瓜', value: '1.3', url: img2},
    {name: 'goods3', label: '西红柿', value: '2.3', url: img3},
    {name: 'goods4', label: '南瓜', value: '0.3', url: img4},
  ])

  // 导出图片
  const exportImage = () => {
    if(containerRef.current){
      html2canvas(containerRef.current, {
        useCORS: true,
        logging: true
      }).then(function(canvas) {
        var a = document.createElement('a');
        a.href = canvas.toDataURL('image/png'); //下载图片
        a.download = '未命名.png';
        a.click();
      });
    }
  }

  return (
    <div className="app">
      {
        isEdit && (
          <Edit data={data} onFinish={(newData) => {
            setData(newData);
            setIsEdit(false)
          }}/>
        )
      }
      {
        !isEdit && (
          <div>
            <div ref={containerRef} className="container">
              <Pervirew data={data}/>
            </div>
            <Button color={'primary'} size='mini' onClick={exportImage}>
              导出图片
            </Button>
            &nbsp;
            <Button color={'primary'} size='mini' onClick={() => setIsEdit(true)}>
              编辑
            </Button>
          </div>
        )
      }
    </div>
  );
}

export default App;
