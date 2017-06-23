using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace Angular2MVC
{
    public class MyHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }

        public void GetRealTime()
        {
            Clients.Caller.setRealTime(DateTime.Now.ToString("h:mm:ss tt"));
        }
    }
}