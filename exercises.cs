using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

// This is the code for your desktop app.
// Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.

namespace EjerciciosPractica
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

      

        private void button1_Click(object sender, EventArgs e)
        {

            double costo = 0.0;
            string cotizacion="";

            cotizacion += "Presupuesto para " + textNombre.Text+"\r\n";
            //Obtain cost
            costo = Convert.ToDouble(txtCosto.Text);

            //Check insurance
            if (radioButton1.Checked == true)
            {
                costo = costo + 500.0;
                cotizacion += "Seguro basico de $500\r\n";
            }
            if (radioButton2.Checked == true)
            {
                costo = costo + 750.5;
                cotizacion += "Seguro a terceros de $750.5\r\n";
            }
            if (radioButton3.Checked == true)
            {
                costo = costo + 1000.0;
                cotizacion += "Seguro completo de $1000.0\r\n";
            }

            //Check equipment

            if (checkBox1.Checked == true)
                {
                costo += 500.0;
                cotizacion += "Con aire acondicionado de $500\r\n";
            }
            if (checkBox2.Checked == true)
                {
                costo += 700.0;
                cotizacion += "Con sistema de audio de $700\r\n";
            }

            //Total
            cotizacion += "El total a pagar es de " + costo.ToString();

            txtCotizacion.Text = cotizacion;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
           
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }
    }
}
