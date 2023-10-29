import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='intro'>
      <h1>Student Profile</h1>
      <h2>Buat student Profile information menggunakan ReactJS</h2>

      <div className='table'>
        <table cellPadding={5} cellSpacing={0}>
          <tr>
            <th>Nama</th>
            <th>Fakultas</th>
            <th>Jurusan</th>
            <th>Alamat</th>
            <th>NIM</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>Clay Mangeber</td>
            <td>Ilmu Komputer</td>
            <td>Informatika</td>
            <td>Asrama Crystal</td>
            <td>10500000000</td>
            <td>Clay@gmail.com</td>
          </tr>
          <tr>
            <td>Lovenia Tulong</td>
            <td>Ilmu Komputer</td>
            <td>Sistem Informasi</td>
            <td>Asrama Jasmine 1</td>
            <td>10500000000</td>
            <td>Lovenia@gmail.com</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
