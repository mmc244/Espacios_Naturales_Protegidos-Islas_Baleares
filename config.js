var config = {
    style: 'mapbox://styles/-margarita-/cmkipyapg004v01qvd5r0ef78',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiLW1hcmdhcml0YS0iLCJhIjoiY21qdnNhYXZvMzM0MTNmc2V1M2FpZThlZSJ9.bQvanB9dsfDTzBQvM8cIcA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Espacios Naturales Protegidos en las Islas Baleares',
    subtitle: 'Proyecto de StoryMap para el Curso de Visualización de Datos de RTVE (2025 - 2026)',
    byline: 'Por Margarita Maciá',
    footer: 'Fuente: datos.gob; Govern de les Illes Balears <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
         {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Introducción y alcance del proyecto',
            image: 'https://www.catadelvino.com/uploads/islas%20baleares%20denomiaciones%20origen%20vinos.png',
            description: 'Los Espacios Naturales Protegidos (ENP) son áreas del territorio sujetas a protección legal debido a su alto valor ecológico, paisajístico, geológico o cultural, con el objetivo de conservar la biodiversidad y promover un uso sostenible de los recursos naturales. La intensa presión urbanística y turística hace imprescindible su conservación en las Islas Baleares, caracterizadas por una alta diversidad de ecosistemas en un territorio limitado. Este proyecto se centra en el análisis y la representación cartográfica de los límites de los ENP en el archipiélago balear mediante el uso de datos geoespaciales, obtenidos de fuentes oficiales (https://datos.gob.es/es/catalogo/a04003003-limits-espais-naturals-protegits-illes-balears), con el fin de visualizar de forma clara su distribución y extensión territorial.',
            location: {
                center: [1.66005, 39.05853],
                zoom: 7.19,
                pitch: 56.57,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Ibiza',
            image: 'https://www.caib.es/sites/espaisnaturalsprotegits/f/484218',
            description: 'Las Reservas Naturales de Es Vedrà, Es Vedranell y los islotes de Poniente (Sa Conillera, S’illa des Bosc, S’Espartar y Ses Bledes: Na Gorra, Es Vaixell, Na Bosc, Els esculls d’en Ramon y Na Plana) forman un espacio natural marítimo-terrestre protegido localizado en el oeste de Ibiza, en el término municipal de Sant Josep de sa Talaia. Todos ellos representan auténticos tesoros naturales, donde además de su alto valor paisajístico y patrimonial, conviven aves marinas, lagartijas e invertebrados endémicos, además de una flora de gran riqueza.',
            location: {
                center: [1.20950, 38.94745],
                zoom: 11.19,
                pitch: 53.07,
                bearing: 34.57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Formentera',
            image: 'https://www.caib.es/sites/espaisnaturalsprotegits/f/484461',
            description: 'El parque natural de ses Salines de Ibiza y Formentera está situado entre el sur de la isla de Ibiza y el norte de la isla de Formentera, es decir, entre las dos islas Pitiüses (incluyendo el espacio marino que las separa), en los términos municipales de Sant Josep de sa Talaia y de Formentera. Constituye un ejemplo paradigmático de la riqueza de la biodiversidad mediterránea. Su singularidad se encuentra en el hecho de que constituyen un área de descanso y de nidificación para las aves en sus migraciones. Como espacio natural de especial interés engloba un conjunto de hábitats terrestres y marinos, con valores ecológicos, paisajísticos, históricos y culturales de primer orden a escala internacional.',
            location: {
                center: [1.41347, 38.81435],
                zoom: 10.19,
                pitch: 53.07,
                bearing: 34.57,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Mallorca',
            image: 'https://www.caib.es/sites/espaisnaturalsprotegits/f/487796',
            description: 'Mallorca alberga diversos espacios naturales protegidos de alto valor ecológico que ofrecen paisajes únicos, desde humedales y dunas hasta montañas, ideales para la conservación de la biodiversidad. Ellos son: PARAJE NATURAL DE LA SERRA DE TRAMUNTANA [declarada Patrimonio de la Humanidad, abarca gran parte de la sierra occidental, incluyendo el Torrent de Paris, Gora Blau y Ses Fonts Ufanes) | PARQUE NATURAL DE S’ALBUFERA DE MALLORCA (zona húmeda más extensa de las Islas Baleares, situada entre Muro y Alcúdia, crucial para las aves migratorias] | PARQUE NATURAL DE MONDRAGÓ [situado en el sureste, destaca por sus playas de aguas turquesas, bosques de pinos y zonas de dunas)] | PARQUE NATURAL DE SA DRAGONERA [islote al oeste conocido por su colonia de lagartijas y su valor paisajístico] | PARQUE NATURAL DE LA PENÍNSULA DE LLEVANT [ubicado en el noroeste, ofrece un entorno montañoso y costero casi virgen] | PARQUE NATURAL MARÍTIMO-TERRESTRE ES TRENC-SALOBRAR DE CAMPOS [protege la emblemática playa de Es Trenc, sus dunas y las salinas] | RESERVA NATURAL DE S’ALBUFERETA [otra de las zonas húmedas más importantes y de mayor interés natural de la isla, de especial interés ornitológico en Pollença (costa norte de Mallorca)] | PARQUE NACIONAL MARÍTIMO-TERRESTRE DEL ARCHIPIÉLAGO DE CABRERA (ver en el apartado siguiente centrado en Cabrera).',
            location: {
                center: [2.68522, 39.43882],
                zoom: 9.96,
                pitch: 56.91,
                bearing: -23.33
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Cabrera',
            image: 'https://www.caib.es/sites/espaisnaturalsprotegits/f/484679',
            description: 'El Parque Nacional Marítimo-terrestre del Archipiélago de Cabrera lo forman un conjunto de islas y de islotes que, por sus especiales condiciones geográficas, geológicas y naturales, ha transitado a lo largo de la historia por una diversidad de situaciones que han conformado un espacio de especial atractivo para todo tipo de visitantes. El visitante de Cabrera Gran, la única isla visitable, se encontrará con un sorpresivo paisaje de calas y rincones prácticamente inalterados por la escasa presencia humana a lo largo de los siglos. Al mismo tiempo, se encontrará con una larga historia de pasajes muy curiosos que despertarán su interés: desde la presencia de un monasterio del siglo V, a las historias de corsarios o la sorprendente historia de los soldados del ejército napoleónico encarcelados en la isla. Sin duda, ir a Cabrera es disfrutar de un paisaje peculiar, de un espacio natural muy bien conservado y de una historia sorprendente.',
            location: {
                center: [3.05871, 39.10431],
                zoom: 9.96,
                pitch: 57.91,
                bearing: -8.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Menorca',
            image: 'https://www.caib.es/sites/espaisnaturalsprotegits/f/483371',
            description: 'El Parque Natural de s’Albufera des Grau, núcleo de la Reserva de la Biosfera de Menorca y único parque natural de la isla, está situado en el noreste e incluye la albufera, la Illa d’en Colom y el Cap de Favàritx, entre otros enclaves de gran valor natural. Fue declarado el 4 de mayo de 1995, tras años de movilizaciones sociales que pedían la protección de la zona. En él se promueve la conservación del paisaje y de la biodiversidad en equilibrio con el desarrollo socioeconómico, la investigación y la educación e interpretación ambiental. La gran diversidad de ambientes naturales, tanto terrestres como marinos, junto con su historia y el aprovechamiento humano a lo largo del tiempo permite apreciar desde la naturaleza prácticamente en su estado más salvaje hasta áreas fuertemente modeladas por la acción humana, con un destacado patrimonio cultural.',
            location: {
                center: [4.23602, 39.91896],
                zoom: 10.96,
                pitch: 57.91,
                bearing: -8.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Conclusiones',
            image: 'https://estaticos-cdn.prensaiberica.es/clip/64ff384d-3fcd-4e4d-9b1c-437ac588ec1a_source-aspect-ratio_default_0.jpg',
            description: 'El proyecto ha permitido visualizar de forma clara la distribución de los Espacios Naturales Protegidos en las Islas Baleares y poner de relieve su importancia en la conservación del territorio. Asimismo, sienta las bases para futuros análisis que incorporen variables como la presión turística o la evolución temporal de estas áreas.',
            location: {
                center: [1.66005, 39.05853],
                zoom: 7.19,
                pitch: 56.57,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
