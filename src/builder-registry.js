// Register custom components with Builder.io
// This file will be automatically loaded by Builder.io

export const customComponents = [
  // Add your custom components here
  // Example:
  // {
  //   component: MyCustomComponent,
  //   name: 'MyCustomComponent',
  //   inputs: [
  //     {
  //       name: 'text',
  //       type: 'string',
  //       defaultValue: 'Hello World'
  //     }
  //   ]
  // }
];

// Auto-register components if Builder is loaded
if (typeof window !== "undefined" && window.Builder) {
  customComponents.forEach((component) => {
    window.Builder.registerComponent(component.component, component);
  });
}
