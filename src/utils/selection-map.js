export default function selectionMap({ series, films }) {
  return {
    series: [
      { title: 'Thriller', data: series.filter((item) => item.genre === 'thriller') },
      { title: 'Mysteries', data: series.filter((item) => item.genre === 'mysteries') },
      { title: 'Crime', data: series.filter((item) => item.genre === 'crime') },
      { title: 'Comedies', data: series.filter((item) => item.genre === 'comedies') },
      { title: 'Children', data: series.filter((item) => item.genre === 'children') },
      { title: 'Documentaries', data: series.filter((item) => item.genre === 'documentaries') },
    ],
    films: [
      { title: 'Drama', data: films.filter((item) => item.genre === 'drama') },      
      { title: 'Thriller', data: films.filter((item) => item.genre === 'thriller') },
      { title: 'Children', data: films.filter((item) => item.genre === 'children') },      
      { title: 'Suspense', data: films.filter((item) => item.genre === 'suspense') },      
      { title: 'Romance', data: films.filter((item) => item.genre === 'romance') },      
      { title: 'Feel Good', data: films.filter((item) => item.genre === 'feel-good') },      
    ]
  }
}