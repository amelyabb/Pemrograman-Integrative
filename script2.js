alert('Program menentukan angka yang dimasukkan bilangan positif atau negatif')
  let angka = parseInt(prompt('Masukan angka'))

  if (angka >= 0) 
  {
    alert('Angka yang anda masukkan ini adalah bilangan positif');
  } 

  else if( angka == 0)
  {
    alert('Angka yang anda ini masukkan adalah 0');
  } 

  else if (angka < 0) 
  {
    alert('Angka yang anda masukkan ini adalah bilangan negatif');
  } 

  else 
  {
    alert('Ini bukan angka');
  }