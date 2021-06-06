using System;
using System.Windows.Forms;
using Microsoft.Web.WebView2.Core;

namespace DemoWebView2 {
    public partial class FrmWebView : Form {
        string message;
        public FrmWebView(string m) {
            InitializeComponent();
            message = m;
        }

        public string Avibelopp { get; set; }

        private async void FrmWebView_Load(object sender, System.EventArgs e)
        {
            await webView21.EnsureCoreWebView2Async(null);
            webView21.CoreWebView2.WebMessageReceived += ShowMessage;
            webView21.Source = new Uri("http://localhost:3000?winformData="+ message);
        }

        private void ShowMessage(object sender, CoreWebView2WebMessageReceivedEventArgs args)
        {
            Avibelopp = args.TryGetWebMessageAsString();
            DialogResult = DialogResult.OK;
            Close();
        }
    }
}
