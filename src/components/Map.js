'use client';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";


export default function MapCompany() {
    return(
        <YMaps query={{ apikey: 'b062de95-e1cd-461d-b16a-4542d40cef68' }}>
          <Map
            defaultState={{
              center: [55.751554, 37.563856],
              zoom: 16,    
            }}
          >
            <Placemark geometry={[55.751574, 37.563856]} />
          </Map>
        </YMaps>
    )
};
