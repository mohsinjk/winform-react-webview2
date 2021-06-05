using System;
using System.Windows.Forms;

namespace DemoWebView2 {
    public partial class FrmMain : Form {
        public FrmMain() {
            InitializeComponent();
        }

        private void btnVisaWebView_Click(object sender, EventArgs e)
        {
            FrmWebView frmWebView = new FrmWebView(txtMessage.Text);

            if(frmWebView.ShowDialog() == DialogResult.OK) {
                label1.Text = frmWebView.Avibelopp;
            }

            frmWebView.Dispose();
        }
    }
}
