using MultiFamilyPortal.ComponentModel;

namespace MultiFamilyPortal.Dtos
{

    [PartialTemplate("tag")]
    [PartialTemplate("category")]
    public class SubscriberNotification : HtmlTemplateBase
    {
        public Uri Url { get; set; }

        public string Email { get; set; }

        [PlainText]
        [RawOutput]
        public string Summary { get; set; }

        public string SocialImage { get; set; }

        public string AuthorName { get; set; }

        public string AuthorProfilePic { get; set; }

        public int Year { get; set; }

        public string SubscribedDate { get; set; }

        public Uri UnsubscribeLink { get; set; }

        public IEnumerable<PostNotificationTag> Tags { get; set; }

        public IEnumerable<PostNotificationCategory> Categories { get; set; }
    }
}
