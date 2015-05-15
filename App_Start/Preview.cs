using Umbraco.Core;
using Umbraco.Web.Models.Trees;
using Umbraco.Web.Trees;

namespace Camelonta.UI.Preview
{
    public class Preview : ApplicationEventHandler
    {
        protected override void ApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            TreeControllerBase.MenuRendering += TreeControllerBase_MenuRendering;
        }

        void TreeControllerBase_MenuRendering(TreeControllerBase sender, MenuRenderingEventArgs e)
        {
            if (sender.TreeAlias == "content")
            {
                var url = "preview/?id=" + e.NodeId;
                var m = new MenuItem()
                {
                    Name = "Preview",
                    Icon = "eye",
                    SeperatorBefore = true,
                };
                m.ExecuteLegacyJs("top.window.open(' " + url + "', 'preview');");
                e.Menu.Items.Insert(2, m);
            }
        }
    }
}