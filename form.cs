using BL;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GUI
{
    public partial class Form1 : Form
    {
        private Venta venta = null;

        public Form1()
        {
            InitializeComponent();
        }

        private void AddButton_Click(object sender, EventArgs e)
        {

            if (venta == null)
            {
                MessageBox.Show("Debe asignar un cliente");
                ClienteTextBox.Focus();
                return;
            }
            if (IdTextBox.Text == string.Empty)
            {
                MessageBox.Show("Debe ingresar un ID");
                IdTextBox.Focus();
                return;
            }

            int id = 0;
            if (!int.TryParse(IdTextBox.Text, out id))
            {
                MessageBox.Show("Debe ingresar un ID numerico entero");
                IdTextBox.Focus();
                return;
            }
            if (id <=0)
                {
                MessageBox.Show("Debe ingresar un ID mayor a cero");
                IdTextBox.Focus();
                return;
            }

            if (DescriptionTextBox.Text == string.Empty)
            {
                MessageBox.Show("Debe ingresar una Descripcion");
                DescriptionTextBox.Focus();
                return;
            }
            decimal price = 0;
            if (!decimal.TryParse(PriceTextBox.Text, out price))
            {
                MessageBox.Show("Debe ingresar un Precio numerico entero");
                PriceTextBox.Focus();
                return;
            }
            if (price <= 0)
            {
                MessageBox.Show("Debe ingresar un Precio mayor a cero");
                PriceTextBox.Focus();
                return;
            }
            int amount = 0;
            if (!int.TryParse(AmountTextBox.Text, out amount))
            {
                MessageBox.Show("Debe ingresar una Cantidad numerico entero");
                AmountTextBox.Focus();
                return;
            }
            if (amount <= 0)
            {
                MessageBox.Show("Debe ingresar una Cantidad mayor a cero");
                AmountTextBox.Focus();
                return;
            }
            Article article = new Article();
            article.ID = id;
            article.Description = DescriptionTextBox.Text;
            article.Price = price;
            article.Amount = amount;

            venta.AddProduct(article);
            DetailsDataGridView.DataSource = null;
            DetailsDataGridView.DataSource = venta.Products;

            IdTextBox.Text = string.Empty;
            DescriptionTextBox.Text = string.Empty;
            PriceTextBox.Text = string.Empty;
            AmountTextBox.Text = string.Empty;
            IdTextBox.Focus();

        }

        private void SetButton_Click(object sender, EventArgs e)
        {
            if (ClienteTextBox.Text == string.Empty)
            {
                MessageBox.Show("Debe ingresar un cliente");
                ClienteTextBox.Focus();
                return;
            }
            venta = new Venta(ClienteTextBox.Text);
            DetailsDataGridView.DataSource = venta.Products;
        }

        private void PayButton_Click(object sender, EventArgs e)
        {
            DialogResult rta = MessageBox.Show(this, string.Format("Su cuenta es:{0:C2}\n" + "Desea pagar?", venta.Total()),"Pagar", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            if (rta == DialogResult.No)
            {
                return;
            }

            venta = null;
            ClienteTextBox.Text = string.Empty;
            ClienteTextBox.Focus();
            DetailsDataGridView.DataSource = null;
            
        }
    }
}
