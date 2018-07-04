using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;



namespace RestClientEnd
{
    public partial class Form1 : Form
    {

        public Form1()
        {
            InitializeComponent();
        }

        private void cmdLoad_Click(object sender, EventArgs e)
        {
            RestClientClass rClient = new RestClientClass();

            rClient.endPoint = URL.Text;

            string strResponse = string.Empty;

            strResponse = rClient.makeRequest();

            debugOutput(strResponse);
        }

        private void cmdClear_Click(object sender, EventArgs e)
        {
            txtResponse.Text = string.Empty;

        }

        private void debugOutput(String strDebugText)
        {
            try
            {
                System.Diagnostics.Debug.Write(strDebugText + Environment.NewLine);
                txtResponse.Text = txtResponse.Text + strDebugText + Environment.NewLine;
                txtResponse.SelectionStart = txtResponse.TextLength;
                txtResponse.ScrollToCaret();



            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.Write(ex.Message, ToString() + Environment.NewLine);
            }

        }

        private void sasdafs(object sender, EventArgs e)
        {

        }

        private void URL_TextChanged(object sender, EventArgs e)
        {

        }

        private void txtResponse_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
