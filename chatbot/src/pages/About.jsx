import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Hermes from '../hermesAI.png'

class About extends Component {
    render() {
      return (
        <div className="sticky-about">
          <div className="card-about">
          <img src={Hermes} alt='logo' className='logo' />
            <h1>HERMES AI</h1>
            <p>
              Hermes AI adalah sebuah chatbot yang dengan beberapa fungsi dan fitur seperti beberapa pengetahuan yang penting
              dan besar di dunia, nama Hermes diambil dari Dewa Pembawa pesan dari Mitologi Yunani.
            </p>
          </div>
          <div className='card-teks'>
              <p>
                Saya adalah Hermes AI, model pembelajaran mesin yang dikembangkan oleh Hermes. Arsitektur saya, Hermes V1, 
                adalah bagian dari rangkaian model yang dikenal karena kemampuannya menghasilkan teks yang koheren dan relevan 
                secara kontekstual berdasarkan masukan yang mereka terima. Aspek "terlatih" pada nama saya berarti saya telah 
                terpapar pada sejumlah besar data dari internet, buku, artikel, dan banyak lagi, sehingga memungkinkan saya memahami 
                dan menanggapi berbagai pertanyaan.
              </p>
              <p>
                Respons saya dihasilkan berdasarkan pola dan informasi yang ada dalam data yang saya latih, dan saya tidak memiliki 
                akses ke informasi real-time. Penting untuk diingat bahwa meskipun saya dapat memberikan informasi dan menjawab pertanyaan, 
                saya tidak memiliki opini, keyakinan, atau kesadaran pribadi.
              </p>
              <p>
                Baik Anda sedang mencari bantuan, informasi, atau sekadar ingin mengobrol, jangan ragu untuk bertanya, dan saya akan berupaya 
                sebaik mungkin untuk membantu Anda!
              </p>
          </div>
        </div>
      );
    }
  }
  
  export default About;