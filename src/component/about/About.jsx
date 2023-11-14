import React from 'react'
import "./about.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <div className='card_container'>
        <Card style={{ width: '18rem' }}>
      <Card.Img src="public/img/download.jpg" style={{ height: '200px', objectFit: 'cover' }}  />
      <Card.Body>
        <Card.Title>Bio Data</Card.Title>
        <Card.Text>
            <ul>
                <li>Nama : Norris Stiven Mosses Dompas</li>
                <li>Alamat : Kakaskasen Dua, Kec. Tomohon Utara, Kota Tomohon, Sulawesi Utara </li>
                <li>Nomor HP : 081247817616 </li>
                <li>Status : Menikah</li>
            </ul>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <Card.Img src="public/img/book02.jpg" style={{ height: '200px', objectFit: 'cover' }}  />
      <Card.Body>
        <Card.Title>Education</Card.Title>
        <Card.Text>
        <ul>
                <li>SD Charitas Jakarta</li>
                <li>SMP BPK PENABUR Tirtamarta </li>
                <li>SMK Yadika12 </li>
                <li>Universitas Klabat</li>
            </ul>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img src="public/img/work.jpg" style={{ height: '200px', objectFit: 'cover' }}  />
      <Card.Body>
        <Card.Title>Work Experience</Card.Title>
        <Card.Text>
        <ul>
                <li>2012 : Bekerja di Resto Cepat saji</li>
                <li>2016 : Sales Mitsubishi </li>
                <li>2017 - 2018 : Sales Toyota</li>
            </ul>

        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img src="public/img/kontak.jpg" style={{ height: '200px', objectFit: 'cover' }}  />
      <Card.Body>
        <Card.Title>Contact</Card.Title>
        <Card.Text>
        <ul>
                <li>Phone : +62 812 4781 7616</li>
                <li>Email : s11810028@student.unklab.ac.id </li>
                <li>Instagram/Facebook : @Nrstvn/ Norris Stiven</li>
                <li>Alamat : Jln. Raya Tomohon-Manado, Tomohon City</li>
            </ul>

        </Card.Text>
      </Card.Body>
    </Card>


    </div>
  )
}

export default About