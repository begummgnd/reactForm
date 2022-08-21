import React from 'react'
import { Menu } from 'semantic-ui-react'
export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item>
        <a href="#1" style={{color: '#37cbe3'}}><h4>Kişisel Bilgiler</h4>  </a> 
        </Menu.Item>
         
         
        <Menu.Item>
        <a href="#1" style={{color: '#37cbe3'}}><h4>Özet Bilgi</h4>  </a> 
        </Menu.Item>
        <Menu.Item>
        <a href="#2" style={{color: '#37cbe3'}}><h4>İş Deneyimleri</h4>  </a> 
        </Menu.Item>
        <Menu.Item>
        <a href="#1" style={{color: '#37cbe3'}}><h4>Eğitim Bilgileri</h4>  </a> 
        </Menu.Item>
        <Menu.Item>
        <a href="#1" style={{color: '#37cbe3'}}><h4>Yabancı Dil</h4>  </a> 
        </Menu.Item>
      </Menu>
    </div>
  )
}
