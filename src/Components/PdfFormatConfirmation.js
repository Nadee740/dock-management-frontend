import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
  },
});

const PdfDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Text style={styles.title}>Hello, React PDF!</Text>
        <Text style={styles.text}>
          This is a simple PDF generated with React and react-pdf.
        </Text>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;