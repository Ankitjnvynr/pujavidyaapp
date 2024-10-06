import React, { useEffect, useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import RenderHtml from "react-native-render-html";

const SiteHome = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("https://puja.bigbytemeta.com/wp-json/wp/v2/pages/201")
      .then((response) => response.json())
      .then((data) => {
        setContent(data.content.rendered); // Use the content field with HTML
      })
      .catch((error) => {
        console.error("Error fetching page content:", error);
      });
  }, []);

  const contentWidth = Dimensions.get("window").width;

  return (
    <ScrollView>
      <View>
        <RenderHtml
          contentWidth={contentWidth}
          source={{ html: content }} // Pass the HTML content to the component
        />
      </View>
    </ScrollView>
  );
};

export default SiteHome;
