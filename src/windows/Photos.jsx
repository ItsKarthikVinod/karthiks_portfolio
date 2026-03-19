import React from 'react'
import useWindowStore from '#store/window';
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';  

import { gallery, photosLinks } from '#constants';
import { Mail, Search } from 'lucide-react';

const Photos = () => {
    const { openWindow } = useWindowStore();
  return (
      <>
          <div id="window-header">
              <WindowControls target="photos" />
              <div className="w-fill flex justify-end items-center gap-3 text-gray-500">
                  <Mail className='icon' />
                  <Search className='icon' />
              </div>
          </div>
          <div className="flex w-full">
              <div className="sidebar">
                  <h2>Photos</h2>
                  <ul>
                      {photosLinks.map(({ id, icon, title }) => (
                          <li key={id}>
                              <img src={icon} alt={title} className='w-4 h-4' />
                              <p>{title}</p>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="gallery">
                  <ul>
                      {gallery.map(({ id, img }) => (
                          <li key={id}
                              onClick={() => openWindow('imgfile', {
                                  id, name: "Gallery image", icon: '/images/image.png', kind: 'file', imageUrl: img,
                                  fileType:'img'

                          })}>
                              <img src={img} alt="Gallery image"  />
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </>
  )
}

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow